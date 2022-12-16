const express = require("express");
const BoostrapController = require("../controller/bootstrap.controller");
const router = express.Router();
router
  .route("/")
  .get(BoostrapController.getBootstrap)
  .post(BoostrapController.createBootstrap);
module.exports = router;
