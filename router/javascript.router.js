const express = require("express");
const JsController = require("../controller/javascript.controller");
const router = express.Router();
router.route("/").get(JsController.getJs).post(JsController.createJs);
module.exports = router;
