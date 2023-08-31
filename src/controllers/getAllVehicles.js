const getAllVehiclesHandler = require("../handlers/getAllVehiclesHandler");


const getAllVehicles = (req, res) => {
    try {
        const allVehicles = getAllVehiclesHandler()
        res.status(200).json(allVehicles)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getAllVehicles;