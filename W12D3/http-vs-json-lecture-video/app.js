const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const ownersRouter = require('./routes/owners');
const petsRouter = require('./routes/pets');
const petsApiRouter = require('./routes/api/pets.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // `/` + router routes
app.use('/pets', petsRouter); // `/pets` + router routes
app.use('/owners', ownersRouter); // `/owners` + ownerRouter routes
app.use('/api/pets', petsApiRouter); // `/api/pets` + petsApiRouter routes

// catch 404 and forward to error handler
app.use(function(_, __, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/')

module.exports = app;
