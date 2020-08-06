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

app.get('/', (req, res) => {
  console.log(req.session);
  if (req.cookies.token) {
    const { email, id } = jwt.verify(req.cookies.token, jwtConfig.secret);
    const href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleAuth.clientId}&redirect_uri=http://localhost:3000/oauth/success&response_type=code&scope=email`;
    res.render('index', { href, email });
  } else {
    const href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleAuth.clientId}&redirect_uri=http://localhost:3000/oauth/success&response_type=code&scope=email`;
    res.render("index", { href });
  }
});

app.get('/oauth/success', async (req, res) => {
  console.log(req.headers);
  console.log(req.query);
  const { code } = req.query;
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
  const { 
    access_token, 
    expires_in, 
    scope, 
    token_type, 
    id_token 
  } = await data.json();
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

  let user = await User.findOne({
    where: { email }
  });
  if (!user) {
    user = await User.create({
      email
    });
  }

  const token = jwt.sign(
    { email: user.email, id: user.id },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expiresIn } // 604,800 seconds = 1 week
  );

  res.cookie("token", token, { httpOnly: true });
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