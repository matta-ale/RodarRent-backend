const { Booking } = require('../db');

async function getAllBookingsHandler() {
  const bookings = await Booking.findAll();
  return bookings;
}

module.exports = {
  getAllBookingsHandler,
};


