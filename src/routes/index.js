const { Router } = require("express");

const postBookingValidate = require("../middlewares/postBookingValidate");
const createBooking = require("../controllers/bookings/createBooking");
const { getAllBookings } = require("../controllers/bookings/getAllBookings");
const { getAllLocations } = require("../controllers/locations/getAllLocations");
const { createLocation } = require("../controllers/locations/createLocation");
const { getLocationById } = require("../controllers/locations/getLocationById");
const { getBookingById } = require("../controllers/bookings/getBookingById");
const { updateBooking } = require("../controllers/bookings/updateBooking");
const { updateLocation } = require("../controllers/locations/updateLocation");
const {
  deleteBookingValidation,
} = require("../middlewares/deleteBookingValidation");
const { deleteBooking } = require("../controllers/bookings/deleteBooking");

const router = Router();
router.get("/hc", (req, res) => {
  // healthcheck
  res.status(200).send("Server up");
});

router.get("/bookings", getAllBookings);
router.post("/bookings", postBookingValidate, createBooking);
router.get("/bookings/:id", getBookingById);
router.get("/locations", getAllLocations);
router.post("/locations", createLocation);
router.get("/locations/:id", getLocationById);
router.put("/bookings/:id", updateBooking);
router.put("/locations/:id", updateLocation);
router.delete("/bookings/:id", deleteBookingValidation, deleteBooking);
module.exports = router;
