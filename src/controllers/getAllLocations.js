const { getAlllocationsHandler } = require('../handlers/getAllLocationsHandler')

const getAllLocations = async (req, res) => {
  try {
    const locations = await getAlllocationsHandler();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getAllLocations,
}
