const express = require("express");
const ReactController = require("../controller/react.controller");
const router = express.Router();
router
  .route("/")
  .get(ReactController.getReact)
  .post(ReactController.createReact);
module.exports = router;
