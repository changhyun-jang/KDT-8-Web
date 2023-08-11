const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

//세션
//옵션객체
//httpOnly : 값을 true로 하면 사용자가 자바스크립틀 통해서 세션을 관리할수 있음
//secure : 값을true로 하면 https에서만 세션을 주고받음
//secret:안전하게 쿠키를 전송하기 위한 쿠키 서명 값
// (세션을 발급할때 사용되는 키)
//resave:세션에 수정사항이 생기지 않더라도 매요청(req)마다 세션을 다시
//저장할 것인지
//saveUinitialized : 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할 결정
app.use(
  session({
    secret: "mySessionkey",
    resave: false,
    saveUinitialized: true,
  })
);
app.get("/", (req, res) => {
  req.session.name = "홍길동";
  res.send("세션 설정완료");
});
app.get("/name", (req, res) => {
  res.send(req.session.name);
});
app.get("destroy", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(PORT);
