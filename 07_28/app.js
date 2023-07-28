const express = require("express");

const app = express();
//상수가 들어간 변수는 대문자로
const PORT = 8001;

//뷰 엔진
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  //뷰엔진 렌더링
  //render(뷰엔진,보낼데이터)
  res.render("main");
});
app.get("/bugs", (req, res) => {
  res.render("test");
});
app.get("/fruits", (req, res) => {
  res.render("test2");
});
app.get("/gugu", (req, res) => {
  res.render("test3", { data: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});
app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}! http://localhost:${PORT}`);
});
