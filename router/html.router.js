const express = require("express");
const htmlController = require("../controller/html.controller");
const router = express.Router();
router.route("/").get(htmlController.getHtml).post(htmlController.createHtml);
module.exports = router;
