const updateVehicleHandler = require("../../handlers/vehicles/updateVehicleHandler");


const updateVehicle = async (req, res) => {
  const data = req.body;
  try {
    const vehicle = await updateVehicleHandler(data);
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = updateVehicle;