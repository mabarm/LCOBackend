const express = require("express");
const format = require("date-format");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.status(200).send("Hello from LCO"));

const instaSocial = {
  username: "mamata@insta",
  followers: "40",
  follow: "90",
  date: format.asString("dd[MM] hh/mm/ss", new Date()),
};
app.get("/api/v1/instagram", (req, res) => {
  res.status(200).json(instaSocial);
});

const facebookSocial = {
  username: "mamata@facebook",
  followers: "60",
  follow: "130",
  date: format.asString("dd-MM-yyyy hh/mm/ss", new Date()),
};
app.get("/api/v1/facebook", (req, res) => {
  res.status(200).json(facebookSocial);
});

const linkedinSocial = {
  username: "mamata@linkedin",
  followers: "110",
  follow: "150",
  date: format.asString("dd-MM-yyyy hh/mm/ss", new Date()),
};
app.get("/api/v1/linkedin", (req, res) => {
  res.status(200).json(linkedinSocial);
});

app.get("/api/v1/:token", (req, res) => {
  res.status(200).json(req.params.token);
});
app.listen(PORT, () => "Server is running");
// console.log("Hello");
