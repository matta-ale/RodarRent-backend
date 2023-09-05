const {
  deleteBookingHandler,
} = require("../../handlers/bookings/deleteBookingHandler");

const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const isDeletedBooking = await deleteBookingHandler(id);
    if (isDeletedBooking) {
      res.status(200).json({ message: "Booking sucessfully deleted" });
    } else {
      res.status(404).json({ error: "Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteBooking;
