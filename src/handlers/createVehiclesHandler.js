const { Vehicle } = require('../db');

const createVehiclesHandler = async (data) => {
    
  try {
    const vehicles = await Vehicle.bulkCreate(data);
    return vehicles

  } catch (error) {
    throw error;
  }
} 

module.exports = createVehiclesHandler;