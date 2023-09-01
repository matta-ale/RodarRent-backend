const { Vehicle } = require('../../db');
const CustomError = require('../../utils/customError');

const getAllVehiclesHandler = async () => {
    try {
        const allVehicles = await Vehicle.findAll()
        return allVehicles
    } catch (error) {
        throw new CustomError(error.message, 500)
    }
}

module.exports = getAllVehiclesHandler;