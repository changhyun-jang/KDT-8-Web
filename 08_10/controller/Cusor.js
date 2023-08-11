import {
  signupUser,
  signinUser,
  post_profile,
  edit_profile,
  delete_profile,
} from "../model/User.js";

import models from "../models";
import { Op } from "sequelize";
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
// const signupMember = (req, res) => {
//   signupUser(req.body.userid, req.body.name, req.body.pw, (result) => {
//     res.send({ result: true, name: req.body.name });
//   });
// };

const signupMember = async (req, res) => {
  // try {
  //   await post_profile(req.body.userid, req.body.name, req.body.pw);
  //   res.send({ result: true, name: req.body.name });
  // } catch (error) {
  //   console.log(error);
  // }

  models.User.Create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then(() => {
    res.send({ result: true });
  });
};

const signinMember = (req, res) => {
  // signinUser(req.body.userid, req.body.pw, (result) => {
  //   if (result.length !== 0) {
  //     res.send({ result: true, userid: req.body.userid });
  //   } else {
  //     res.send({ result: false });
  //   }
  // });
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then(() => {
    res.send({ result: true, userid: req.body.userid });
  });
};

const SeeProfile = (req, res) => {
  // post_profile(req.body.userid2, (result) => {
  //   res.render("profile", { data: result[0] });
  // });
  models.User.findOne({
    where: {
      userid: req.body.profile,
    },
  }).then(() => {
    res.render("profile", { data: result[0] });
  });
};

const editProfile = (req, res) => {
  // edit_profile(req.body, (result) => {
  //   res.send({ result: req.body });
  // });
  models.User.Update(
    {
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => {
    res.send({ result: req.body });
  });
};

const deleteProfile = (req, res) => {
  // delete_profile(req.body.id, (result) => {
  //   res.send({ result: true });
  // });
  models.User.Destroy({
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.send({ result: true });
  });
};

const findall = (req, res) => {
  models.User.findAll({
    //'attributes' 원하는 컬럼 조회
    //findAll 배열로 반환
    attributes: ["name", "id"],
    //Op.gt(초과), Op.gte(이상), Op.lt(미만),Op.ne(같지않은)
    //Op.or(또는), Op.in(배열요소중 하나), Op.notIn(배열요소와 모두 다름)
    where: { id: { [Op.gte]: 4 } },
    //orderby
    order: [["id", "DESC"]],
    limit: 1,
  }).then((result) => {
    res.send(result);
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
  findall,
};
