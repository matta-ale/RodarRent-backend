const { Booking } = require("../../db");

const getAllBookingsHandler = async () => {
  const bookings = await Booking.findAll();
  return bookings;
};

module.exports = {
  getAllBookingsHandler,
};
