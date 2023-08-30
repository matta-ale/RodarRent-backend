
const createVehicleHandler = require('../handlers/createVehicleHandler');

const createVehicle = async (req, res) => {
  const data = req.body;
  try {
    const newVehicle = await createVehicleHandler(data);
    res.status(200).json(newVehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createVehicle;