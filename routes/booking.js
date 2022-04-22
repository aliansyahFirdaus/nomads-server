const express = require("express");
const router = express.Router();

const Authentication = require("../middleware/authentication");
const Booking = require("../controller/booking-controller");
const Transaction = require("../controller/paymentGateway");

router.use(Authentication.user);

router.post("/", Booking.bookingCreate);
router.post("/checkout", Transaction.payment);
router.post("/payment/success", Transaction.paymentSuccess);
router.get("/:number", Booking.getBookingByNumber);

module.exports = router;
