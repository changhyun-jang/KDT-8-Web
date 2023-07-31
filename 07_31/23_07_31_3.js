const express = require("express");
const app = express();
const PORT = 8080;

//bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//viewengine
app.set("view engine", "ejs");
app.set("views", "./views");

//routes
//get방식
app.get("/", (req, res) => {
  //   console.log(req.body);
  //   res.send("hello");
  res.render("index", { title: "폼 실습" });
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});
app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

//post방식, 다른 방식 써도됌
app.post("/", (req, res) => {
  console.log(req.body);
});

//put방식
app.put("/", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
