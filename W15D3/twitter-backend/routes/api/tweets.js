const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const { routeHandler, handleValidationErrors } = require("../utils");
const { requireUser } = require("../utils/auth");

const db = require('../../db/models');
const { Tweet, User } = db;

router.get('/', routeHandler(async (req, res) => {
  const tweets = await Tweet.findAll({
    include: [{
      model: User,
      attributes: ['id', 'username']
    }],
    order: [['createdAt', 'DESC']]
  });

  res.json({ tweets });
}));

const validateTweet = [
  check("message")
    .exists()
    .isLength({ min: 1, max: 280 }),
  handleValidationErrors
]

router.post('/', requireUser, validateTweet, routeHandler(async (req, res)=> {
  const { message } = req.body;
  const userId = req.user.id;
  
  const newTweet = await Tweet.create({ message, userId });
  console.log('NewTweet', newTweet);

  const tweet = await Tweet.findByPk(newTweet.id, {
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      },
    ]
  });
  console.log('tweet', tweet);
  res.json({ tweet });
}));

router.get('/:id', routeHandler(async (req, res, next) => {
  const tweet = await Tweet.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      },
    ],
  });
  if (!tweet) {
    const err = new Error('Tweet not found.');
    err.status = 404;
    next(err);
    return;
  }
  res.json({ tweet });
}));

router.delete('/:id', requireUser, routeHandler(async (req, res) => {
  const tweet = await Tweet.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      },
    ],
  });
  if (!tweet) {
    const err = new Error("Tweet not found.");
    err.status = 404;
    next(err);
    return;
  }

  await tweet.destroy();
  res.json({ message: 'success' });
}));

module.exports = router;