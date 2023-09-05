const {
  updateBookingHandler,
} = require("../../handlers/bookings/updateBookingHandler");

const updateBooking = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  try {
    const booking = await updateBookingHandler(data, id);
    res.status(200).json(booking);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = updateBooking;
