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
      
      if (
        !domain ||
        !brand ||
        !model ||
        !year ||
        !type ||
        !passengers ||
        !transmission ||
        !fuel ||
        !pricePerDay ||
        !availability ||
        !image 
      ) {
        throw new Error('Please complete all the data');
      } else {
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
} 

module.exports = createVehicleHandler;