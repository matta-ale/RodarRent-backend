const {
  getAllLocationsHandler,
} = require("../../handlers/locations/getAllLocationsHandler");

const getAllLocations = async (req, res) => {
  try {
    const locations = await getAllLocationsHandler();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllLocations;
