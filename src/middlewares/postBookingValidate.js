const postBookingValidate = (req, res, next) => {
    const { startDate, finishDate, pickUpLocationId, returnLocationId, stateBooking  } = req.body;
  
    if (!startDate) return res.status(404).json({ error: 'Missing start date' });
    if (!finishDate) return res.status(404).json({ error: 'Missing finish date' });
    if (!pickUpLocationId) return res.status(404).json({ error: 'Missing pick up location' });
    if (!returnLocationId) return res.status(404).json({ error: 'Missing return location' });
    if (!stateBooking) return res.status(404).json({ error: 'Missing state' });
  
    next();
  };
  
  module.exports = postBookingValidate;
  