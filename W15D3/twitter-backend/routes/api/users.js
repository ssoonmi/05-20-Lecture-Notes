const express = require("express");
const router = express.Router();
const { routeHandler, handleValidationErrors } = require('../utils');
const { getUserToken } = require('../utils/auth');

const bcrypt = require('bcryptjs');
const { expiresIn } = require('../../config').jwtConfig;
const db = require('../../db/models');
const { Op } = require("sequelize");
const { User } = db;

const { check }= require('express-validator');

const validateUsername = [
  check("username")
    .exists()
];

const validateAuthFields = [
  check("username", "Username field must be between 5 and 70 characters")
    .isLength({ min: 5, max: 70 }),
  check("email", "Email fields must be a valid email")
    .exists()
    .isEmail(),
  check("password", "Password field must be 6 or more characters")
    .exists()
    .isLength({ min: 6, max: 70 }),
  check('password2', 'Confirm password field must have the same value as the password field')
    .exists()
    .custom((value, { req }) => value === req.body.password)
]

// signup route
router.post(
  "/",
  validateUsername,
  validateAuthFields,
  handleValidationErrors,
  routeHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    const user = await User.create({
      username,
      hashedPassword: bcrypt.hashSync(password, 10),
      email,
    });

    const token = await getUserToken(user);
    res.cookie("token", token, { maxAge: expiresIn * 1000 }); // maxAge in milliseconds

    res.json({ id: user.id, username: user.username, token });
  })
);

// logging in
router.put(
  "/token",
  validateUsername,
  handleValidationErrors,
  routeHandler(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email: username }],
      },
    });
    if (!user || !user.validatePassword(password)) {
      const err = new Error(
        "The username and password you entered did not match our records. Please double-check and try again."
      );
      err.status = 401;
      err.title = "Unauthorized";
      throw err;
    }

    const token = await getUserToken(user);

    res.cookie("token", token, { maxAge: expiresIn * 1000 }); // maxAge in milliseconds

    res.json({ id: user.id, username: user.username, token });
  })
);

router.delete('/session', routeHandler(async(req,res) => {
  res.clearCookie('token');
  res.json({ message: 'success' });
}));

router.get('/me', routeHandler(async (req, res, next) => {
  if (req.user) {
    return res.json({
      id: req.user.id,
      username: req.user.username
    });
  }
  const err = new Error('Invalid token');
  err.status = 401;
  next(err);
}));

module.exports = router;
