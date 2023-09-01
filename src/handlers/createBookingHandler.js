const { Booking } = require('../db');

const createBookingHandler = async ({startDate,finishDate,pickUpLocationId, returnLocationId, stateBooking, VehicleDomain}) => {
  const booking = await Booking.create({
    startDate,
    finishDate,
    pickUpLocationId,
    returnLocationId,
    stateBooking,
    VehicleDomain,
  });
  return booking;
}

module.exports = {
  createBookingHandler,
};