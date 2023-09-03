const { Booking } = require("../../db");

const deleteBookingHandler = async (id) => {
  const deletedBooking = await Booking.findByPk(id);
  if (deletedBooking) {
    await deletedBooking.update({ isDeleted: true });
    return true;
  }
  return false;
};

module.exports = {
  deleteBookingHandler,
};
