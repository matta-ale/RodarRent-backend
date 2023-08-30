const { Vehicle } = require('../db');

const createVehicleHandler = async (data) => {
  const {
    domain,
    brand,
    model,
    year,
    type,
    passengers,
    transmission,
    fuel,
    pricePerDay,
    availability,
    image
  } = data;
    
  try {
    const [vehicle, created] = await Vehicle.findOrCreate({
      where: { domain },
      defaults: {
        brand,
        model,
        year,
        type,
        passengers,
        transmission,
        fuel,
        pricePerDay,
        availability,
        image
      },
    });

    if (!created) {
      throw new Error('Vehicle already exists');
    } else {
      return vehicle;
    }
  } catch (error) {
    throw error;
  }
} 

module.exports = createVehicleHandler;