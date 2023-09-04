const { Router } = require("express");

const {
  getAllLocations,
  createLocation,
  getLocationById,
  updateLocation,
} = require("../../controllers/locations");

const router = Router();

router.get("/locations", getAllLocations);
router.post("/locations", createLocation);
router.get("/locations/:id", getLocationById);
router.put("/locations/:id", updateLocation);

module.exports = router;
