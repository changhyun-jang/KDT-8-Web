const express = require("express");
const app = express();
const multer = require("multer");
const dotenv = require("dotenv");
const aws = require("aws-sdk"); //aws설정을 위한 모듈
const multerS3 = require("multer-s3"); // aws s3에 업로드하기 multer 설정
const PORT = 8080;
app.set("view engine", "ejs");
app.use("/uploads", express.static(__dirname + "/uploads"));
dotenv.config();

aws.config.update({
  accessKeyId: process.env.S3_KEYID,
  secretAccessKey: process.env.S3_ACCESSKEY,
  region: process.env.S3_REGION,
});
const s3 = new aws.S3();

//multer 설정 -aws
const upload = multer({
  storage: multerS3({
    //버킷에 대한 s3
    s3: s3,
    bucket: process.env.S3_BUCKET,
    acl: "public-read", // 파일접근 권한(public-read로 해야 업로드된 파일 공개)
    metadata: function (req, file, cb) {
      cb(null, { fileName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString + "-" + file.originalname);
    },
  }),
});

//라우터
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/upload", upload.array("files"), (req, res) => {
  console.log(req.files);
  req.setEncoding(req, files);
});

app.listen(PORT, () => {
  console.log("아몰랑 서버시작");
});
