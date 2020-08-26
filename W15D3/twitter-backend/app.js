const express = require("express");
const app = express(); // initializing an express app

const indexRouter = require('./routes');

const logger = require('morgan');

app.use(logger('dev'));
app.use(require('cookie-parser')());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setTimeout(1000);
  req.setTimeout(1000);

  next();
});

app.use('/public', express.static('public'));
app.use('/', indexRouter);


module.exports = app;