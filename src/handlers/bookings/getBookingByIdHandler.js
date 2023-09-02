const { Booking } = require("../../db");
const CustomError = require("../../utils/customError");

const getBookingByIdHandler = async (id) => {
  try {
    const booking = await Booking.findByPk(id);

    if (!booking)
      throw new CustomError(`There's no booking matching id ${id}`, 404);
    return booking;
  } catch (error) {
    throw new CustomError(error.message, 500);
  }
};

module.exports = {
  getBookingByIdHandler,
};
