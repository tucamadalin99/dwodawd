const express = require("express");
const router = express.Router();
const otherController = require("../controllers").otherController;

router.get("/reset", otherController.reset);

module.exports = router;
