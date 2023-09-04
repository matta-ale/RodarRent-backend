const {
  getAllBookingsHandler,
} = require("../../handlers/bookings/getAllBookingsHandler");

const getAllBookings = async (req, res) => {
  try {
    const bookings = await getAllBookingsHandler();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllBookings;
