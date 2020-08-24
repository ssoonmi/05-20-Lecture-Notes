const express = require("express");
const morgan = require("morgan");

const { environment } = require('./config');

const indexRouter = require("./routes/index");
const tasksRouter = require("./routes/tasks");
const usersRouter = require("./routes/users");

const app = express(); // initialization of express app

app.use(morgan("dev")); // logger for express routes
app.use(express.json()); // setting req.body to an object (POJO) if req's Content-Type is application/json

app.use((req, res, next) => {
  console.log('before middleware');
  next(); // invoke the next middleware
});

app.use("/users", usersRouter);
app.use("/", indexRouter); // indexRouter is invoked only when path of req is `/`
app.use("/tasks", tasksRouter); // tasksRouter is invoked only when path of req is `/tasks`

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  console.log('Unhandled requests errors middleware');
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// Custom error handlers.

// Generic error handler.
app.use((err, req, res, next) => {
  console.log('All errors middleware');
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    stack: isProduction ? null : err.stack,
  }); // res.json is invoking res.end
});

module.exports = app;