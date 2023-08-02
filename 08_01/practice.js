const express = require("express");
const app = express();
const PORT = 8080;
const identity = "hello";
const password = "12345";

//bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//viewengine
app.set("view engine", "ejs");
app.set("views", "./views");

//route
app.get("/", (req, res) => {
  //실습1
  // res.render("practice");
  //실습2
  res.render("practice2");
});

app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log("back", req.body);
  if (req.body.identity === identity && req.body.pw === password) {
    res.send([req.body, true]);
  } else {
    res.send([req.body, false]);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
