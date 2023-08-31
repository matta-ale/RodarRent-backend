const getAllVehiclesHandler = require("../../handlers/Vehicles/getAllVehiclesHandler");


const getAllVehicles = (req, res) => {
    try {
        const allVehicles = getAllVehiclesHandler()
        res.status(200).json(allVehicles)
    } catch (error) {
        res.status(error.statusCode).json({ error: error.message })
    }
}

module.exports = getAllVehicles;