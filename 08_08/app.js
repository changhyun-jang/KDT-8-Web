import express from "express";
import { router } from "./routes/user.js";
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/upload", express.static("/upload"));

//bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

//항상 맨마지막 라우터로 저장
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
