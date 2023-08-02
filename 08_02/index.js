const express = require("express");
const multer = require("multer");
//내장 모듈 path
const path = require("path");
const app = express();
const PORT = 8080;

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");
//정적파일 설정
app.use("/upload", express.static("./upload"));
//multer setting
const upload = multer({
  //dest : 업로드할 파일을 저장할 경로를 지정
  //폴더가 자동으로 생성
  dest: "upload/",
});
const uploadDetail = multer({
  //storage:저장할 공간에 대한 정보
  //diskStorage:파일을 디스크에 저장하기위한모든 제어기능을제공
  storage: multer.diskStorage({
    //done은 콜백함수로 마음대로 작성
    //폴더 자동생성이 안되므로 미리폴더를 생성해둬야함
    destination(req, file, done) {
      done(null, "upload/");
    },
    filename(req, file, done) {
      //확장자를 가져오는 코드(png또는 jpg등등)
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  //용량제한
  limits: {
    //5메가바이트
    fileSize: 1024 * 1024 * 5,
  },
});

//router
app.get("/", (req, res) => {
  res.render("index");
});
//싱글
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});
//멀티 버전1
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send("Upload Multiple each");
});
//멀티 버전2
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log(req.files);
    console.log(req.body);
    res.send("Upload Multiple each");
  }
);
//동적 파일 전송
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);
//router
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
