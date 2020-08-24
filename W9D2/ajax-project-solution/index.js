const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(logger('dev'));

const port = 3000;

// Controls the probability of an error being thrown. If ERROR_RATE is 0, then
// an error will never be thrown. If ERROR_RATE is 100, then an error will
// always be thrown:
const ERROR_RATE = 100;

const getRandomInt = () => {
  // generates integer from 0 to 99:
  return Math.floor(Math.random() * Math.floor(100));
};

const potentialErrors = [
  "No cat for you!",
  "Sad day. No kitten here.",
  "Please try again!"
];

const generateRandomError = () => {
  const i = getRandomInt();

  if (i < ERROR_RATE) {
    const errorI = i % potentialErrors.length;
    const error = potentialErrors[errorI];
    throw Error(error);
  }
};

const kitten = {
  score: 0,
  comments: []
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/kitten/image", (req, res) => {
  try {
    generateRandomError();
    fetch("https://api.thecatapi.com/v1/images/search?size=small")
      .then(res => res.json())
      .then(data => {
        kitten.score = 0;
        kitten.comments = [];
        kitten.src = data[0].url;
        res.json(kitten);
      });
  } catch (e) {
    res.status(503).send({ message: e.message });
  }
});

app.patch("/kitten/upvote", (req, res) => {
  kitten.score += 1;
  res.json({ score: kitten.score });
});

app.patch("/kitten/downvote", (req, res) => {
  kitten.score -= 1;
  res.json({ score: kitten.score });
});

app.post("/kitten/comments", (req, res) => {
  const comment = req.body.comment;
  kitten.comments = [...kitten.comments, comment];
  res.json({ comments: kitten.comments });
});

app.delete("/kitten/comments/:id", (req, res) => {
  // :id in the /kitten/comments/:id is a wildcard in the url that will be mapped
    // to whatever comes after the /comments in the url path and be included in the
    // req object as `req.params.id` as seen below
  // ex: a DELETE request to "/kittens/comments/hello" will make `req.params.id`
    // equal to "hello"
  // ex: a DELETE request to "/kittens/comments/3" will make `req.params.id`
    // equal to "3"
  const updatedComments = kitten.comments.filter((_, i) => i != req.params.id);
  kitten.comments = updatedComments;
  res.json({ comments: kitten.comments });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
