const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "mySessionkey",
    resave: false,
    saveUinitialized: true,
  })
);

//router 분리
const router = require("./routes/main");
app.use("/", router);

//오류처리
app.use("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
