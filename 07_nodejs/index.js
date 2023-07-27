import http from "http";
import fs from "fs";
// 항상 서버는 요청과 응답
// 관례상 req, res 또는 request, response 로 설정
const server = http.createServer((req, res) => {
  // 응답헤더 성공시 200 전송
  //   res.writeHead(200);
  //   res.write("<h1>hello world</h1>");
  //   res.end("<p>ENd</p>");
  //   파일전송
  try {
    const data = fs.readFileSync("./index.html");
    res.writeHead(200);
    res.end(data);
  } catch (err) {
    console.log(err);
    res.writeHead(404);
    res.end(err.message);
  }
});

server.listen(8080, function () {
  console.log("localhost:8080포트로 실행");
});
