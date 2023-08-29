const ws = require("ws");
const express = require("express");
const app = express();
const PORT = 8000;
//29 추가
const http = require("http");
const server = http.createServer(app);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});
//브라우저 (클라이언트)들을 담을 변수선언
const sockets = [];
//웹소켓 서버 접속
const wss = new ws.Server({ server });

//socket변수는 접속한 브라우저를 의미
wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다.");
  //sockets배열에 브라우저 추가
  sockets.push(socket);

  socket.on("message", (message) => {
    //29추가
    //웹소캣을 통해 클라이언트와 서버간의데이터를 주고 받을때는 일반적으로 문자열 또는 버퍼형태로 전달됨
    //서버가 모두 다른 환경이기 때문에 객체를 전달할때는 객체를 일련의 바이트로 전환하는 직렬화과정이 필요함 -> 버퍼를 쓰는이유

    const msg = JSON.parse(message);
    console.log(`클라이언트로부터 받은 메세지: ${msg.msg}`);
    //클라이언트로 응답메시지 전송
    // socket.send(`${message}`);
    //29 추가 클라이언트들을 하나하나sockets에 push하지않고, wss.clients라는 걸 이용해 하나하나 가져오기 가능.
    sockets.forEach((elem) => {
      elem.send(`${msg.name} : ${msg.msg}`);
    });
  });
  //오류
  socket.on("error", (err) => {
    console.log("에러가 발생하였습니다.", err);
  });
  //접속종료
  socket.on("close", () => {
    console.log("클라이언트와의 연결이 종료됨");
  });
});

//서버시작
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
