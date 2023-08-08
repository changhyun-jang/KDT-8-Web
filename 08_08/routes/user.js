import express from "express";
import {
  main,
  signuppage,
  signinpage,
  signupMember,
  signinMember,
  SeeProfile,
  editProfile,
  deleteProfile,
} from "../controller/Cusor.js";
const router = express.Router();
router.get("/", main);
router.get("/user/signup", signuppage);
router.post("/user/signup", signupMember);
router.get("/user/signin", signinpage);
router.post("/user/signin", signinMember);
router.post("/user/profile", SeeProfile);
router.patch("/user/profile/edit", editProfile);
router.delete("/user/profile/delete", deleteProfile);

export { router };
