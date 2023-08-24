const Visitor = require("../model/Model");

exports.main = (req, res) => {
  res.render("index", { users: Visitor.commentInfos() });
};

exports.good = (req, res) => {
  Visitor.addUser(
    req.body.userId,
    req.body.com,
    req.body.gender,
    req.body.major,
    (result) => {
      res.send(result);
    }
  );
};
