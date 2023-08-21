const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "secretKey";
//bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("practice2");
});
app.get("/login", (req, res) => {
  res.render("practice2_login");
});
const userInfo = { id: "jang", pwd: "12345" };

app.post("/login", (req, res) => {
  const { id } = req.body;
  if (userInfo.id === req.body.id || userInfo.pwd === req.body.pwd) {
    const token = jwt.sign({ id }, SECRET);
    res.send({ result: true, token: token });
  } else {
    res.send({ result: false, message: "로그인에 실패하셨습니다." });
  }
});
app.post("/verify", (req, res) => {
  console.log(req.headers);
  const auth = req.headers.authorization;
  const token = auth.split(" ");
  if (token[0] === "Bearer") {
    jwt.verify(token[1], SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .send({ result: false, message: "검증에 실패하셨습니다." });
      }
      res.send({ result: true, user: decoded });
    });
  } else {
    res.send({ result: false, message: "올바른 인증방식이 아닙니다." });
  }
});
app.listen(PORT, () => {});
