const getAvailableVehiclesHandler = require('../../handlers/vehicles/getAvailableVehiclesHandler');

const getAllAvailable = async (req, res) => {
    try {
        const available = await getAvailableVehiclesHandler({...req.query})
        res.status(200).json(available)
    } catch (error) {
        res.status(error.statusCode).json({error: error.message})

    }
}

module.exports = getAllAvailable;