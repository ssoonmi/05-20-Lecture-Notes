// check what environment you are using
console.log(process.env.NODE_ENV); // logs the NODE_ENV variable
console.log(require('./config').environment); // gets environment from config file

const express = require('express');

const app = express();
app.set('view engine', 'pug');

// Wrapper function to catch errors and do something before passing error into
// the next middleware
const wrapper = (routeHandler) => {
  return async (req, res, next) => {
    try {
      await routeHandler(req, res, next);
    } catch (err) {
      // do something before errors go into next middleware
      next(err);
    }
  };
};

// Use Wrapper Function

app.get('/', wrapper((req, res, next) => {
  const { User } = require('./models');
  const users = User.findAll();
  res.render('index', { users }); // comment this out for successful response
  // res.render('index', { users: [{ name: "Mike" }] }); // comment this in for successful response
}));

// Error middlewares defined AFTER all routes are defined
// Error middlewares WILL NOT RUN if the response is finished

// Catch unhandled requests and forward to error handler. Called when no routes
// are matched
app.use((req, res, next) => {
  const err = new Error('The requested page couldn\'t be found.');
  err.status = 404;
  next(err);
});

// Custom error handlers.

// Error handler to log errors.
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    // TODO Log the error to the database.
  } else {
    console.error(err);
  }
  next(err);
});

// Error handler for 404 errors.
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404);
    res.render('page-not-found', {
      title: 'Page Not Found',
    });
  } else {
    next(err);
  }
});

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = process.env.NODE_ENV === 'production';
  res.render('error', {
    title: 'Server Error',
    message: isProduction ? null : err.message,
    stack: isProduction ? null : err.stack,
  });
});

const port = 3000;

const connect = async () => {
  try {
    await require('./db/models').sequelize.authenticate();;
    console.log('Connection has been established successfully.');
    app.listen(port, () => console.log('Server is listening on port', port));
  } catch (error) {
    console.error('Unable to connect to the database');
  }
};

connect();