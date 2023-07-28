// import express from "express";
const express = require("express");
const { join } = require("path");

const app = express();
//상수가 들어간 변수는 대문자로
const PORT = 8001;

//뷰 엔진
app.set("view engine", "ejs");
app.set("views", "./views");
// app.use("views", express.static(__dirname + "/views"));

//정적인 파일 불러오기
//app.use("/public", express.static(join(__dirname, "public")));
app.use("/public", express.static("public"));

// app.get(url, 콜백함수(요청,응답){})
//프론트에서 무언가 해달라고 요청
//그러면 백에서 응답을 해줌
// app.get("/", function (req, res) {
//   //   res.send("hello express");
//   // send는 클라이언트에 응답데이터를 보낼때
//   res.send({ result: true, code: 1000, message: "화원가입에 성공하였습니다." });
// });

app.get("/", (req, res) => {
  //뷰엔진 렌더링
  //render(뷰엔진,보낼데이터)
  res.render("test3", { data: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});
app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}! http://localhost:${PORT}`);
});
