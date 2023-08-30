// Models
const { Vehicle, Booking } = require('../db');
// tools & hooks
const { Op } = require('sequelize');

const getAvailableHandler = async (query) => {
    try {
        const { limit, offset, startDate, endDate } = query // filters & order should be added here too
        limit = Number(limit)
        offset = Number(offset)   
        
        const busy = await Booking.findAll({
            where: {
                startDate: {
                    [Op.lte]: new Date(endDate)
                },
                endDate: {
                    [Op.gte]: new Date(startDate)
                }
            },
            attributes: ['vehicleId'],
        })
        const busyIds = busy.map(item => item.VehicleId)
        
        const available = await Vehicle.findAndCountAll({
            where : {
                domain: {
                    [Op.notIn]: busyIds
                }
            },
            attributes: ['domain', 'brand', 'model', 'type', 'passengers', 'transmission', 'fuel', 'image'],
        })

        return available


    } catch (error) {
        throw error
    }
}

module.exports = getAvailableHandler;