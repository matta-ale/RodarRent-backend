const { Vehicle } = require('../../db');
const CustomError = require('../../utils/customError');

const createVehiclesHandler = async (data) => {
    
  try {
    const vehicles = await Vehicle.bulkCreate(data);
    return vehicles

  } catch (error) {
    throw new CustomError(error.message, 500);
  }
} 

module.exports = createVehiclesHandler;