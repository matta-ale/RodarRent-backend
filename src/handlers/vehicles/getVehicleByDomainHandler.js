const { Vehicle } = require('../../db');
const CustomError = require('../../utils/customError');

const getVehicleByDomainHandler = async (domain) => {
  try {
    const vehicle = await Vehicle.findByPk(domain);
    if (!vehicle) throw new CustomError(`There's no customer matching id ${domain}`, 404)
    return vehicle
  } catch (error) {
    throw new CustomError(error.message, 500);
  }
};

module.exports = getVehicleByDomainHandler;