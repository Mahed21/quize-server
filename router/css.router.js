const express = require("express");
const cssController = require("../controller/css.controller");
const router = express.Router();
router.route("/").get(cssController.getCss).post(cssController.createCss);
module.exports = router;
