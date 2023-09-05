const {
  getLocationByIdHandler,
} = require("../../handlers/locations/getLocationByIdHandler");

const getLocationById = async (req, res) => {
  const { id } = req.params;
  try {
    const location = await getLocationByIdHandler(id);
    res.status(200).json(location);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = getLocationById;
