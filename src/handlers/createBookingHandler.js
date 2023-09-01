const { Booking } = require('../db');

const createBookingHandler = async ({startDate,finishDate,pickUpLocationId, returnLocationId}) => {
  const booking = await Booking.create({
    startDate,
    finishDate,
    pickUpLocationId,
    returnLocationId,
    
  });
  return booking;
}

module.exports = {
  createBookingHandler,
};