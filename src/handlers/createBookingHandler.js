const { Booking } = require('../db');

const createBookingHandler = async ({startDate,finishDate,pickUpLocationId, returnLocationId, stateBooking}) => {
  const booking = await Booking.create({
    startDate,
    finishDate,
    pickUpLocationId,
    returnLocationId,
    stateBooking
  });
  return booking;
}

module.exports = {
  createBookingHandler,
};