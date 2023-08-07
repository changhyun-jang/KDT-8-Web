import express from "express";
import {
  main,
  Visitors,
  wVisitors,
  dVisitors,
  eVisitors,
  sVisitors,
} from "../controller/Cvisitor.js";
const router = express.Router();

router.get("/", main); //GET
router.get("/visitor", Visitors);
router.get("/visitor/get", sVisitors);
router.post("/visitor/write", wVisitors);
router.delete("/visitor/delete", dVisitors);
router.patch("/visitor/edit", eVisitors);

export { router };
