const getVehicleByDomainHandler = require('../../handlers/vehicles/getVehicleByDomainHandler');

const getVehicleByDomain = async (req, res) => {
  const {domain} = req.params
  try {
    const vehicle = await getVehicleByDomainHandler(domain);
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = getVehicleByDomain;