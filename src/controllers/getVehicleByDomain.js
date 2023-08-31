const getVehicleByDomainHandler = require('../handlers/getVehicleByDomainHandler')

const getVehicleByDomain = async (req, res) => {
  const {domain} = req.params
  try {
    const customer = await getVehicleByDomainHandler(domain);
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getVehicleByDomain;