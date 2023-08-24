import {
  signupUser,
  signinUser,
  post_profile,
  edit_profile,
  delete_profile,
} from "../model/User.js";
const main = (req, res) => {
  // 뷰-> node.js가 제공하는 템플릿, ejs,pug 등, 리액트로 화면을 구성하면 json으로만 거의 사용예정, render와 같이 백엔드측에서 화면을 열어주지는 않음
  // res.render : 뷰페이지를 렌더링, render (뷰페이지이름, 데이터(선택))
  // res.send : 모든타입 데이터전송
  // res.json : 객체 타입 전송
  // res.redirect : 페이지를 이동, 데이터 이동 안됌
  res.render("index");
};

//회원가입으로 이동
const signuppage = (req, res) => {
  res.render("signup");
};

//로그인으로 이동
const signinpage = (req, res) => {
  res.render("signin");
};
// 1번
const signupMember = (req, res) => {
  signupUser(req.body.userid, req.body.name, req.body.pw, (result) => {
    res.send({ result: true, name: req.body.name });
  });
};

// const signupMember = async (req, res) => {
//   try {
//     await post_profile(req.body.userid, req.body.name, req.body.pw);
//     res.send({ result: true, name: req.body.name });
//   } catch (error) {
//     console.log(error);
//   }
// };

const signinMember = (req, res) => {
  signinUser(req.body.userid, req.body.pw, (result) => {
    if (result.length !== 0) {
      res.send({ result: true, userid: req.body.userid });
    } else {
      res.send({ result: false });
    }
  });
};

const SeeProfile = (req, res) => {
  post_profile(req.body.userid2, (result) => {
    res.render("profile", { data: result[0] });
  });
};

const editProfile = (req, res) => {
  edit_profile(req.body, (result) => {
    res.send({ result: req.body });
  });
};

const deleteProfile = (req, res) => {
  delete_profile(req.body.id, (result) => {
    res.send({ result: true });
  });
};
export {
  main,
  signuppage,
  signinpage,
  signupMember,
  signinMember,
  SeeProfile,
  editProfile,
  deleteProfile,
};
