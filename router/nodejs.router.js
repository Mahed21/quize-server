const express = require("express");
const nodeController = require("../controller/node.controller");
const router = express.Router();
router.route("/").get(nodeController.getNode).post(nodeController.createNode);
module.exports = router;
