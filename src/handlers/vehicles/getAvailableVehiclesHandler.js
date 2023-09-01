const { Vehicle, Booking } = require('../../db');
const { Op } = require('sequelize');
const CustomError = require('../../utils/customError');


const getAvailableVehiclesHandler = async (query) => {
    try {
        let { 
            limit, 
            offset, 
            startDate, 
            finishDate, 
            orderBy, 
            direction, 
            type, 
            transmission, 
            fuel, 
            pricePerDayMin, 
            pricePerDayMax,
            passengersMin,
            passengersMax 
        } = query 

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

        // setup where for DDBB query
        const where = {
            domain: {
                [Op.notIn]: busyCars
            }
        }
        if (type) { where.type = type }
        if (transmission) { where.transmission = transmission }
        if (fuel) { where.fuel = fuel }
        if (pricePerDayMin && pricePerDayMax) {
            where.pricePerDay = {
                [Op.gte] : Number(pricePerDayMin),
                [Op.lte] : Number(pricePerDayMax)
            }
        } else if (pricePerDayMin) {
            where.pricePerDay = {
                [Op.gte] : Number(pricePerDayMin)
            }
        } else if (pricePerDayMax) {
            where.pricePerDay = {
                [Op.lte] : Number(pricePerDayMax)
            }
        }
        if (passengersMin && passengersMax) {
            where.passengers = {
                [Op.gte] : Number(passengersMin),
                [Op.lte] : Number(passengersMax)
            }
        } else if (passengersMin) {
            where.passengers = {
                [Op.gte] : Number(passengersMin)
            }
        } else if (passengersMax) {
            where.passengers = {
                [Op.lte] : Number(passengersMax)
            }
        }

        const order = [[(orderBy) ? orderBy : 'pricePerDay', (direction) ? direction : 'ASC']]

        const availableVehicles = await Vehicle.findAll({
            where,
            order,
            attributes: ['domain', 'brand', 'model', 'type', 'passengers', 'transmission', 'fuel', 'pricePerDay', 'image']
        })

        
        // reformatear esto en utils
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
        const results = oneOfEachType;
        ///////////

        if (limit) { 
            limit = Number(limit) 
        } else {
            limit = results.length
        }
        
        if (offset) { 
            offset = Number(offset) 
        } else {
            offset = 0
        }

        const page = (offset < limit) ? 1 : Math.ceil(offset / limit)
        const totalPages = Math.ceil(results.length/limit)
        const showFrom = (offset-limit < 0) ? 0 : (offset-limit)
        const showTo = (showFrom + limit > results.length) ? results.length : (showFrom + limit)
        
        let nextString = '/available?'
        let prevString = '/available?'
        for (let prop in query) {
            if (nextString.at(-1) !== '?') { nextString += '&' }
            if (prevString.at(-1) !== '?') { prevString += '&' }
            if (prop === 'offset') {
                nextString += `offset=${showTo}`
                prevString += `offset=${showFrom-limit}`
            } else {
                nextString += `${prop}=${query[prop]}`
                prevString += `${prop}=${query[prop]}`
            }
        }

        const next = (page === totalPages) ? null : nextString
        const prev = (page === 1) ? null : prevString  

        const response = {
            page,
            totalPages,
            next,
            prev,
            count: results.length,
            results: results.slice(showFrom, showTo)
        }

        return response

    } catch (error) {
        throw new CustomError(error.message, 500)
    }
}

module.exports = getAvailableVehiclesHandler;