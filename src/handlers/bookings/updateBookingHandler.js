const { Booking } = require("../../db");
const CustomError = require("../../utils/customError");

const updateBookingHandler = async (data, id) => {
  try {
    const updatedBooking = await Booking.update(data, {
      where: { id },
      return: true,
      raw: true,
    });
    if (updatedBooking[0] === 0) {
      throw new CustomError(`Can't update booking with id ${id}`, 400);
    } else {
      return `Booking with id ${id} succesfully updated`;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateBookingHandler,
};
