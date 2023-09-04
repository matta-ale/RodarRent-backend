const {
  getBookingByIdHandler,
} = require("../../handlers/bookings/getBookingByIdHandler");

const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await getBookingByIdHandler(id);
    res.status(200).json(booking);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = getBookingById;
