const getVehicleByIdHandler = require('../../handlers/vehicles/getVehicleByIdHandler');

const getVehicleById = async (req, res) => {
  const {id} = req.params
  try {
    const vehicle = await getVehicleByIdHandler(id);
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = getVehicleById;