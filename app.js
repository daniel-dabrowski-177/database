const arr = [
  {
    name: "LLC",
    code: "1",
  },
  {
    name: "Corporation",
    code: "2",
  },
  {
    name: "Sole Proprietor",
    code: "3",
  },
];

const express = require("express");
const app = express();

app.listen("5000", () => {
  console.log("app is running");
});

app.get("/", (req, res) => {
  res.send(arr);
});
