const { Booking } = require('../db');

<<<<<<< HEAD
const createBookingHandler = async ({startDate,finishDate,pickUpLocationId, returnLocationId, stateBooking, VehicleDomain}) => {
=======
const createBookingHandler = async ({startDate,finishDate,pickUpLocationId, returnLocationId}) => {
>>>>>>> origin/backend-development
  const booking = await Booking.create({
    startDate,
    finishDate,
    pickUpLocationId,
    returnLocationId,
<<<<<<< HEAD
    stateBooking,
    VehicleDomain,
=======
    
>>>>>>> origin/backend-development
  });
  return booking;
}

module.exports = {
  createBookingHandler,
};