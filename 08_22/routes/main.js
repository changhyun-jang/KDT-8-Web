const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.post("/addSee", controller.good);

module.exports = router;
