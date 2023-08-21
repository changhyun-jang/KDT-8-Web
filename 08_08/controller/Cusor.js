import {
  signupUser,
  signinUser,
  post_profile,
  edit_profile,
  delete_profile,
} from "../model/User.js";
const main = (req, res) => {
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
