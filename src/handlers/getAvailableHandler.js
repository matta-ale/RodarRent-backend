// Models
const { Vehicle, Booking } = require('../db');
// tools & hooks
const { Op } = require('sequelize');

const getAvailableHandler = async (query) => {
    try {
        const { limit, offset, startDate, finishDate } = query // filters & order should be added here too
        limit = Number(limit)
        offset = Number(offset)   
        
        const busy = await Booking.findAll({
            where: {
                startDate: {
                    [Op.lte]: new Date(finishDate)
                },
                finishDate: {
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
            attributes: ['brand', 'model', 'type', 'passengers', 'transmission', 'fuel', 'image'],
            distinct: true, // vamos a ver si esto efectivamente filtra
        })

        const response = {
            limit,
            offset,
            count: available.count,
            results: available.rows
        } 

        return response

    } catch (error) {
        throw error
    }
}

module.exports = getAvailableHandler;