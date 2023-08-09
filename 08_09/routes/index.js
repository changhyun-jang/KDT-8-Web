const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.main); //GET
router.get("/visitor", controller.Visitors);
router.get("/visitor/get", controller.sVisitors);
router.post("/visitor/write", controller.wVisitors);
router.delete("/visitor/delete", controller.dVisitors);
router.patch("/visitor/edit", controller.eVisitors);

module.exports = router;
