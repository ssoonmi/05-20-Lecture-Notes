const express = require("express");
const router = express.Router();

const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("../utils");
const { getUserToken } = require("../auth");

const bcrypt = require("bcryptjs");
const db = require("../db/models");

const { User } = db;

const validateEmailAndPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

router.post(
  "/",
  validateEmailAndPassword,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, hashedPassword });

    const token = getUserToken(user);
    res.cookie('token', token);
    res.status(201).json({
      user: { id: user.id },
      token,
    });
  })
);

// OR you can do the following:

// const validateEmailAndPassword = [
//   check("email")
//     .exists({ checkFalsy: true })
//     .isEmail()
//     .withMessage("Please provide a valid email."),
//   check("password")
//     .exists({ checkFalsy: true })
//     .withMessage("Please provide a password."),
// ];

// router.post(
//   "/",
//   validateEmailAndPassword,
//   handleValidationErrors,
//   asyncHandler(async (req, res) => {
//     // TODO: handle user creation
//   })
// );

router.post(
  "/login",
  validateEmailAndPassword,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ 
      where: { email }
    });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = getUserToken(user);
      res.status(201).json({
        user: { id: user.id },
        token,
      });
    } else {
      const err = new Error('Invalid email and password combination');
      err.status = 401;
      next(err);
    }
  })
);

module.exports = router;