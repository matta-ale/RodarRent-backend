const { Router } = require("express");

const createVehicles = require("../controllers/vehicles/createVehicles");
const postVehiclesValidate = require("../middlewares/postVehiclesValidate");
const postBookingValidate = require("../middlewares/postBookingValidate");
const createBooking = require("../controllers/bookings/createBooking");
const { getAllBookings } = require("../controllers/bookings/getAllBookings");
const getVehicleById = require("../controllers/vehicles/getVehicleById");
const getAllVehicles = require("../controllers/vehicles/getAllVehicles");
const { getAllLocations } = require("../controllers/locations/getAllLocations");
const { createLocation } = require("../controllers/locations/createLocation");
const updateVehicle = require("../controllers/vehicles/updateVehicle");
const getAllAvailable = require("../controllers/vehicles/getAllAvailable");
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
router.post("/vehicles", postVehiclesValidate, createVehicles);
router.get("/vehicles/:id", getVehicleById);
router.get("/vehicles", getAllVehicles);
router.put("/vehicles", updateVehicle);
router.get("/bookings", getAllBookings);
router.post("/bookings", postBookingValidate, createBooking);
router.get("/bookings/:id", getBookingById);
router.get("/locations", getAllLocations);
router.post("/locations", createLocation);
router.get("/locations/:id", getLocationById);
router.get("/available", getAllAvailable);
router.put("/bookings/:id", updateBooking);
router.put("/locations/:id", updateLocation);
router.delete("/bookings/:id", deleteBookingValidation, deleteBooking);
module.exports = router;
