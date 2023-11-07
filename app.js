const express = require("express");

const app = express();

const path = require("path");

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World");
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
