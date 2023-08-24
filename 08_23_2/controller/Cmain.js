const model = require("../model/Model");
const express = require("express");
const session = require("express-session");
express().use(
  session({
    secret: "mySessionkey",
    resave: false,
    saveUinitialized: true,
  })
);
///////////////////////////////////////
//GET
const main = (req, res) => {
  res.render("index");
};
//회원가입 페이지
const signup = (req, res) => {
  res.render("signup");
};
//로그인 페이지
const signin = (req, res) => {
  res.render("signin");
};

////////////////////////////////////////////////
//POST
//회원가입
const post_signup = (req, res) => {
  model.db_signup(req.body, () => {
    res.json({ result: true });
  });
};

const post_signin = (req, res) => {
  model.db_signin(req.body, (result) => {
    if (result.length > 0) {
      req.session.name = result[0].id;
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  });
};

const seeuser = (req, res) => {
  console.log(req.session);
  model.db_seeuser(req.session.name, (result) => {
    console.log("어디지", result[0]);
    res.render("seeuser", { data: result[0] });
  });
};
const edituser = (req, res) => {
  res.render("edituser");
};
const patch_edituser = (req, res) => {
  model.db_edituser(
    req.session.name,
    req.body.userid,
    req.body.name,
    req.body.pw,
    (result) => {
      console.log(result);
      res.json({ result: true });
    }
  );
};
//res.render: 뷰페이지를 렌더링  render(뷰페이지이름, 데이터(선택)), 뷰 => node.js가 제공하는 템플릿
//res.send: 모든타입 데이터 전송(모든타입? 문자열, 배열, 객체, 숫자 )
//res.json: 객체타입 데이터 전송
//res.redirect: 페이지를 이동
module.exports = {
  main,
  signup,
  signin,
  post_signup,
  post_signin,
  seeuser,
  edituser,
  patch_edituser,
};
