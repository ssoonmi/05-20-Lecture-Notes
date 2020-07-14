const express = require("express");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const port = 3000;

// Controls the probability of an error being thrown. If ERROR_RATE is 0, then
// an error will never be thrown. If ERROR_RATE is 100, then an error will
// always be thrown:
const ERROR_RATE = 0;

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
    axios
      .get("https://api.thecatapi.com/v1/images/search?size=small")
      .then(image => {
        kitten.score = 0;
        kitten.comments = [];
        kitten.src = image.data[0].url;
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
  const updatedComments = kitten.comments.filter((_, i) => i != req.params.id);
  kitten.comments = updatedComments;
  res.json({ comments: kitten.comments });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
