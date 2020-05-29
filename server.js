const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT;

app.use(function (req, res, next) {
  if (req.get("X-Forwarded-Proto") !== "https") {
    res.redirect("https://" + req.get("Host") + req.url);
  } else next();
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Pontinho listening on port ${port}!`);
});
