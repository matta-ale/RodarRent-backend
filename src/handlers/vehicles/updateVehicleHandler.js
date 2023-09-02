const { Vehicle } = require('../../db');
const CustomError = require('../../utils/customError');

const updateVehicleHandler = async (data) => {
    const { id } = data;

    try {
        const updated = await Vehicle.update(data, {
            where: { id },
            return: true,
            raw: true,
        });
        if (updated[0] === 0) {
            throw new CustomError(`Can't update vehicle with domain ${id}`, 404);
        } else {
            return `Vehicle with id ${id} succesfully updated`;
        }
    } catch (error) {
        throw new CustomError(error.message, 500);
    }
};

module.exports = updateVehicleHandler;