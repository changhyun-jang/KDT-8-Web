const http = require("http");
const SocketIO = require("socket.io");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

const server = http.createServer(app);

const io = SocketIO(server);

app.get("/", (req, res) => {
  res.render("client");
});

//소켓
io.on("connection", (socket) => {
  //socket.on과 프론트의 socket.emit의 파라미터를 대응되게 구성
  //이벤트명 맞추기
  socket.on("new_message", (arg, cb) => {
    console.log("client : ", arg);
    if (arg === "hello") {
      cb(arg + " : 안녕하세요.");
    } else if (arg === "study") {
      cb(arg + " : 공부합시다!");
    } else {
      cb(arg + " : 잘가~");
    }
  });
});

//서버오픈
server.listen(PORT, () => {
  console.log("서버 시작");
});
