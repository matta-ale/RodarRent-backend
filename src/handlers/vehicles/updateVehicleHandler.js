const { Vehicle } = require('../../db');
const CustomError = require('../../utils/customError');

const updateVehicleHandler = async (data) => {
    const { domain } = data;

    try {
        const updated = await Vehicle.update(data, {
            where: { domain },
            return: true,
            raw: true,
        });
        if (updated[0] === 0) {
            throw new CustomError(`Can't update vehicle with domain ${domain}`, 404);
        } else {
            return `Vehicle with domain ${domain} succesfully updated`;
        }
    } catch (error) {
        throw new CustomError(error.message, 500);
    }
};

module.exports = updateVehicleHandler;