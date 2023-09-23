const { Booking } = require('../../db');

const postReviewValidate = async (req, res, next) => {
  const { CustomerId, rating, review } = req.body;

  if (!CustomerId) return res.status(404).json({ error: 'Missing CustomerID' });
  if (!rating) return res.status(404).json({ error: 'Missing rating' });
  if (!review) return res.status(404).json({ error: 'Missing review' });

  const booking = await Booking.findOne({ where: { CustomerId } });

  if (!booking) {
    return res
      .status(400)
      .json({ error: 'No booking found for this customer' });
  }

  if (booking.stateBooking !== 'completed') {
    return res
      .status(400)
      .json({ error: 'You need a completed booking to post a review' });
  }

  next();
};

module.exports = postReviewValidate;
