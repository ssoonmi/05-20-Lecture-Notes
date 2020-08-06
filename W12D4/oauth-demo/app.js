const express = require("express");
const morgan = require("morgan");
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const { environment, googleAuth, jwtConfig } = require('./config');
const db = require('./db/models');
const { User } = db;

const app = express();

app.set('view engine', 'pug');

app.use(morgan("dev"));
app.use(express.json()); 
app.use(cookieParser());

app.use((req, res, next) => {
  // Set the timeout for all HTTP requests
  req.setTimeout(1000, () => {
    let err = new Error("Request Timeout");
    err.status = 408;
    next(err);
  });
  // Set the server response timeout for all HTTP requests
  res.setTimeout(1000, () => {
    let err = new Error("Service Unavailable");
    err.status = 503;
    next(err);
  });

  next();
});

app.get('/', async (req, res) => {
  // If there is a JWT auth token in the cookie, find a user by the id in the
    // payload of that JWT. If JWT auth token cannot be verified or no user is
    // found, clear the cookie to log out the user from the session
  try {
    if (req.cookies.token) {
      const { id } = jwt.verify(req.cookies.token, jwtConfig.secret);

      const user = await User.findByPk(id);
      if (!user) throw new Error('No user found with that id');

      return res.render('index', { 
        email: user.email, 
        id: user.id, 
        loggedIn: true
      });
    } 
  } catch(err) {
    res.clearCookie('token');
  }

  // If there is no user found in the session, then prompt the user to sign in
  const href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleAuth.clientId}&redirect_uri=http://localhost:3000/oauth/success&response_type=code&scope=email`;
  res.render("index", { href, loggedIn: false });
});

app.get('/oauth/success', async (req, res) => {
  const { code } = req.query;
  // Google OAuth gives the code to you in the query
  // Make a POST request to Google OAuth with that code and your Google Client
    // Id and your Google Client Secret to get information about the signed in
    // Google user and a token to make more requests on behalf of that user to
    // Google
  const data = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    body: JSON.stringify({
      client_id: googleAuth.clientId,
      client_secret: googleAuth.clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/oauth/success'
    })
  });

  // From the response, you can extract the id_token which is a JWT containing
    // information about the user like their email
  const { 
    access_token, 
    expires_in, 
    scope, 
    token_type, 
    id_token 
  } = await data.json();

  // Extract the email from the JWT payload
  const {
    iss,
    azp,
    aud,
    sub,
    email,
    email_verified,
    at_hash,
    italics,
    exp
  } = jwt.decode(id_token);

  // Find a user by the email provided by Google
  let user = await User.findOne({
    where: { email }
  });

  // If no user is found by that email, create the user with that email
  if (!user) {
    user = await User.create({
      email
    });
  }

  // Create an JWT authentication token for your app to use to authorize and
    // identify this user
  const token = jwt.sign(
    { email: user.email, id: user.id },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expiresIn } // 604,800 seconds = 1 week
  );

  // Set the JWT auth token to the cookie
  res.cookie("token", token, { httpOnly: true });

  // Redirect the user to the home page
  res.redirect('/');
});

app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    stack: isProduction ? null : err.stack,
  }); // res.json is invoking res.end
});

module.exports = app;