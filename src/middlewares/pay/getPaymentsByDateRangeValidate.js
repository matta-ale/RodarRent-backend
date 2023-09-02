/* eslint-disable consistent-return */
const getPaymentsByDateRangeValidate = (req, res, next) => {
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) {
    return res
      .status(400)
      .json({ error: 'Both startDate and endDate are required' });
  }
  next();
};

module.exports = getPaymentsByDateRangeValidate;
