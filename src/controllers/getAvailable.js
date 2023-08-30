const getAvailableHandler = require('../handlers/getAvailableHandler');

const getAvailable = async (req, res) => {
    try {
        const available = getAvailableHandler({...req.query})
        res.status(200).json()
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getAvailable;