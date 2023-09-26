const express = require("express");
const db = require("./models");
const app = express();
const PORT = 8000;
//쿠키랑 세션은 모두 index.js에 설정
const cookieParser = require("cookie-parser");
const session = require("session");

console.log(process.env.NODE_ENV);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "mySession",
    resave: false, //세션 데이터가 변경되지 않더라도세션을 다시 저장할지 여부(default:true)
    saveUinitialized: true, //세션데이터가 초기화되지않은상태에서도 세션에 저장할지 여부
    //초기화되지 않은 세션데이터? 세션을 시작한 후 데이터를 저장하지 않은 상태
    cookie: { httpOnly: true, maxAge: 60 * 1000 },
  })
);
//router 분리
const router = require("./routes/main");
app.use("/", router);

//오류처리
app.use("*", (req, res) => {
  res.status(404).render("404");
});

//db싱크
//force:true 항상 테이블을 삭제 후 재생성
//force:false(default) 테이블이 존재하면 패쓰, 없으면 생성
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});