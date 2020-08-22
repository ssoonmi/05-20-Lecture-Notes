const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("index root");
});

module.exports = router;
