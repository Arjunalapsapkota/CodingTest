const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3090;
const Data = require("./MockData.js");
const app = express();
// Define middleware here
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use("*", function(req, res, next) {
  //replace localhost:8080 to the ip address:port of your server
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes here

app.get("/", (req, res) => {}); // root route

app.get("/api", (req, res) => {
  console.log(Data);
  res.json(Data);
}); // our only api route

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
}); // route everything else to home page
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
