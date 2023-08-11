const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./models");
const router = require("./routes/student");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/upload", express.static("/upload"));

//bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

//항상 맨마지막 라우터로 저장
app.get("*", (req, res) => {
  res.render("404");
});

//force:true면 기존에 있던 테이블 삭제후 재생성
//force:false면 기존에 있던 있으면 생성 X
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
