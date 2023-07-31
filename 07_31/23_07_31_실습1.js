const express = require("express");
const app = express();
const PORT = 8080;

//bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//viewengine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("post_practice", { title: "post로 정보받기" });
});
// app.get("/getResult", (req, res) => {
//   res.render("get_result", { userInfo: req.query });
// });
// app.post("/", (req, res) => {
//   res.render("post_practice", { title: "post로 정보받기" });
// });

app.post("/postResult", (req, res) => {
  res.render("post_result", { userInfo: req.body });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
