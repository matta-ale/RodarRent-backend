const {
  updateLocationHandler,
} = require("../../handlers/locations/updateLocationHandler");

const updateLocation = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  try {
    const location = await updateLocationHandler(data, id);
    res.status(200).json(location);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = updateLocation;
