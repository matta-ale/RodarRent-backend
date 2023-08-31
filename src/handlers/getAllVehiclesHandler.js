const { Vehicle } = require('../db');

const getAllVehiclesHandler = () => {
    try {
        const allVehicles = Vehicle.findAll()
        return allVehicles
    } catch (error) {
        throw error
    }
}

module.exports = getAllVehiclesHandler;