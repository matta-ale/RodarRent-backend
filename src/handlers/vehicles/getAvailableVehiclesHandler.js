const { Vehicle, Booking } = require('../../db');
const { Op } = require('sequelize');


const getAvailableVehiclesHandler = async (query) => {
    try {
        let { limit, offset, startDate, finishDate } = query // filters & order should be added here too
        limit = Number(limit)
        offset = Number(offset)

        const busy = await Booking.findAll({
            where: {
                stateBooking: {
                    [Op.ne]: 'canceled'
                },
                startDate: {
                    [Op.lte]: new Date(finishDate)
                },
                finishDate: {
                    [Op.gte]: new Date(startDate)
                }
            },
            attributes: ['VehicleDomain'],
        })
        let busyCars = busy.map(item => item.VehicleDomain).filter(item => item !== null)

        const availableVehicles = await Vehicle.findAll({
            where: {
                domain: {
                    [Op.notIn]: busyCars
                },
            },
            attributes: ['domain', 'brand', 'model', 'type', 'passengers', 'transmission', 'fuel', 'pricePerDay', 'image']
        })

        console.log(typeof availableVehicles)

        const oneOfEachType = []
        availableVehicles.forEach(availableCar => {
            const { domain, brand, model, type, passengers, transmission, fuel, pricePerDay, image } = availableCar
            const alreadyIn = oneOfEachType.filter(car => { 
                return (car.brand === brand && car.model === model && car.transmission === transmission && car.fuel === fuel && car.pricePerDay === pricePerDay)
            })
            if (!alreadyIn.length) {
                oneOfEachType.push(availableCar)
            }
        })

        const page = (offset < limit) ? 1 : Math.ceil(offset / limit)
        const showFrom = (offset-limit < 0) ? 0 : (offset-limit)
        const showTo = (showFrom + limit > oneOfEachType.length) ? oneOfEachType.length : (showFrom + limit)
        const next = 'work in progress'
        const prev = 'work in progress'

        const response = {
            limit,
            offset,
            page,
            next,
            prev,
            count: oneOfEachType.length,
            results: oneOfEachType.slice(showFrom, showTo)
        }

        return response

    } catch (error) {
        throw error
    }
}

module.exports = getAvailableVehiclesHandler;