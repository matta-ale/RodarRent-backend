const {
  createBookingHandler,
} = require("../../handlers/bookings/createBookingHandler");

const createBooking = async (req, res) => {
  const data = req.body;
  try {
    const newBooking = await createBookingHandler(data);
    res.status(200).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createBooking;
