const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
const cookieConfig = {
  //httpOnly:웹서버를 통해서만 쿠키에 접근가능
  //자바스크립트에서 document.cookie이용하여 쿠키에 접속하는 것을 차단
  //maxAge:쿠키의 수명(밀리초단위)
  //expires:쿠키의 만료날짜 GMT 시간설정
  //path:해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹브라우저는 해당하는 쿠키만 웹 서버에 전송
  //쿠키가 전송될 URL특정 가능(기본값:'/')
  //domain:쿠키가 전송될 도메인을 특정 가능( 기본값 : 현재도메인)
  //secure:웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  //signed: 쿠키의 암호화결정(req.signedCookies 객체에 들어있음)
  httpOnly: true,
  MaxAge: 60 * 1000,
};

app.get("/", (req, res) => {
  res.render("practice");
});
app.get("/setCookie", (req, res) => {
  console.log(1);
  //쿠키이름, 쿠키값, 옵션객체
  res.cookie("myCookie", "myValue", cookieConfig);
  res.send("set cookie");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
