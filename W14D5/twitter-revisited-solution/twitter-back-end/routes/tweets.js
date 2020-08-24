const express = require("express");
const { check } = require("express-validator");
const { handleValidationErrors, asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");
const router = express.Router();
const db = require("../db/models");

const { Tweet, User } = db;

router.use(requireAuth);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const tweets = await Tweet.findAll({
      include: [{ model: User, as: "user", attributes: ["username", "id"] }],
      order: [["createdAt", "DESC"]],
      attributes: ["message", "id"],
    });
    res.json({ tweets });
  })
);

const tweetNotFoundError = (id) => {
  const err = Error("Tweet not found");
  err.errors = [`Tweet with id of ${id} could not be found.`];
  err.title = "Tweet not found.";
  err.status = 404;
  return err;
};

const validateTweet = [
  check("message")
    .exists({ checkFalsy: true })
    .withMessage("Tweet can't be empty."),
  //  message cannot be longer than 280 characters:
  check("message")
    .isLength({ max: 280 })
    .withMessage("Tweet can't be longer than 280 characters."),
  handleValidationErrors,
];

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const tweet = await Tweet.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (tweet) {
      res.json({ tweet });
    } else {
      next(tweetNotFoundError(req.params.id));
    }
  })
);

router.post(
  "/",
  validateTweet,
  asyncHandler(async (req, res) => {
    const { message, userId } = req.body;
    const parsedId = await parseInt(userId, 10);
    const tweet = await Tweet.create({ message, userId: parsedId });
    res.json({ tweet });
  })
);

router.put(
  "/:id",
  validateTweet,
  asyncHandler(async (req, res, next) => {
    const tweet = await Tweet.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (req.user.id !== tweet.userId) {
      const err = new Error("Unauthorized");
      err.status = 401;
      err.message = "You are not authorized to edit this tweet.";
      err.title = "Unauthorized";
      throw err;
    }
    if (tweet) {
      await tweet.update({ message: req.body.message });
      res.json({ tweet });
    } else {
      next(tweetNotFoundError(req.params.id));
    }
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const tweet = await Tweet.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (req.user.id !== tweet.userId) {
      const err = new Error("Unauthorized");
      err.status = 401;
      err.message = "You are not authorized to delete this tweet.";
      err.title = "Unauthorized";
      throw err;
    }
    if (tweet) {
      await tweet.destroy();
      res.json({ message: `Deleted tweet with id of ${req.params.id}.` });
    } else {
      next(tweetNotFoundError(req.params.id));
    }
  })
);

module.exports = router;
