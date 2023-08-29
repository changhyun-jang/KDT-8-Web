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
app.get("/chat", (req, res) => {
  res.render("chat");
});
//소켓
io.on("connection", (socket) => {
  //socket.on과 프론트의 socket.emit의 파라미터를 대응되게 구성
  //이벤트명 맞추기
  socket.on("join", (chatroom) => {
    socket.room = chatroom;
    socket.join(chatroom);

    // io.to(특정 방).emit(이벤트):특정방의 전체 사용자에게 메시지 전달
    // socket.broadcast.to('room').emit('userjoin',메시지):
    //나를 제외한 전체사용자에게 메시지 전달
    socket.broadcast.to(chatroom).emit("userjoin", `사용자가 입장하셨습니다.`);
  });
  socket.on("new_message", (arg, cb) => {
    console.log(arg);
    cb(arg);
  });
  socket.on("message", (username2, message) => {
    io.to(socket.room).emit("chat", username2, `${message}`);
  });
});

//서버오픈
server.listen(PORT, () => {
  console.log("서버 시작");
});
