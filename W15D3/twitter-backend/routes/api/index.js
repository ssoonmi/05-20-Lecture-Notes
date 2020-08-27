const express = require("express");
const router = express.Router();
const { environment } = require('../../config');

const usersRouter = require('./users');
const tweetsRouter = require('./tweets');
const { ValidationError } = require("sequelize");
const { getUserFromToken } = require("../utils/auth");

router.use(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return next();

  const user = await getUserFromToken(token, res);
  if (user) req.user = user;
  else res.clearCookie("token");
  next();
});

router.use('/users', usersRouter);
router.use('/tweets', tweetsRouter);

router.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map(e => e.message);
  }
  next(err);
});

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  if (!isProduction) console.log(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

router.use('*', (req, res) => {
  res.status(404).json({ message: 'route does not exist' });
})

module.exports = router;