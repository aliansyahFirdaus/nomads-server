const express = require("express");
const router = express.Router();

const Weather = require("../controller/weather-controller");

router.get("/:city", Weather.getWeather);

module.exports = router;
