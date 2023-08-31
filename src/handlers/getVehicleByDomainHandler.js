const { Vehicle } = require('../db');

const getVehicleByDomainHandler = async (domain) => {
  try {
    const vehicle = await Vehicle.findByPk(domain);
    if(!vehicle) throw new Error(`There's no customer matching id ${domain}`)
    return vehicle
  } catch (error) {
    throw error;
  }
};

module.exports = getVehicleByDomainHandler;