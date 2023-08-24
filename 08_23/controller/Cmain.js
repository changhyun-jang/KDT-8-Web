const model = require("../model/Model");

exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_singup = (req, res) => {
  const { userid, name, pw } = req.body;
  model.db_signup(userid, name, pw, () => {
    res.json({
      result: true,
    });
  });
};

exports.post_singin = (req, res) => {};
