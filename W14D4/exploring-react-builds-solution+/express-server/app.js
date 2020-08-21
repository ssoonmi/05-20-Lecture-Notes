const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = 9000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
