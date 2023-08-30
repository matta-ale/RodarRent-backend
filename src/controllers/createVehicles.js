
const createVehiclesHandler = require('../handlers/createVehiclesHandler');

const createVehicles = async (req, res) => {
  const data = req.body;
  try {
    const newVehicles = await createVehiclesHandler(data);
    res.status(200).json(newVehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createVehicles;