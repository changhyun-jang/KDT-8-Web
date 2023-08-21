//일반 form 전송은 동기방식 사용할때
const express = require("express");
const app = express();
PORT = 8000;

app.set("view engine", "ejs");
//views라는 설정을다른 폴더로 바꿀때 쓰는 옵션
//views라는 폴더를 기본으로 사용할때는 입력 안해도됨
//두번째 파라미터에 바꾸고 싶으면 수정
app.set("views", "./views");

//bodyparser
//post일떄 사용
//extended 중첩된 객체 표현을 허용할지 말지 정함
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
//페이지를 지정할때는 미들웨어 use를 사용
//use 는 동일한 페이지로 인식
//use는 404페이지일떄 사용
app.get("/", (req, res) => {
  res.render("index");
});

//get은 조회,검색, 페이지나타내기 등에사용
app.get("/getForm", (req, res) => {
  //get방식은 request(req)에 query형태로 접근
  //req.query구조분해할당 req.query.id, req.query.pw
  const { id, pw } = req.query;
  //result 페이지에 데이터전송
  // key-value 형태에서 key값과 value의 변수가 동일할때는 value를 생략 가능
  res.render("result", { title: "get요청", userInfo: { id, pw } });
});

app.post("/postform", (req, res) => {
  //post방식은 request(req)에 body형태로접근
  //req.body 구조분해할당 req.body.id, req.body.pw
  const { id, pw } = req.body;
  //result 페이지에 데이터 전송
  res.render("result", { title: "post요청", userInfo: { id, pw } });
});

app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, (req, res) => {});
