const express = require("express");
const router = express.Router();
const { homeController } = require("../controllers/routesController");

router.get("/", homeController);

module.exports = router;
