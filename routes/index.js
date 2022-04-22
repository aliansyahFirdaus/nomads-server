const express = require("express");

const user = require("./user");
const destination = require("./destination");
const booking = require("./booking");
const weather = require("./weather");

const router = express.Router();

router.use("/user", user);
router.use("/destination", destination);
router.use("/booking", booking);
router.use("/weather", weather);

module.exports = router;
