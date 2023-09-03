const getPaymentsByDateRangeHandler = require('../../handlers/pay/getPaymentsByDateRangeHandler');

async function getPaymentsByDateRange(req, res) {
  const { startDate, endDate } = req.query;
  try {
    const payments = await getPaymentsByDateRangeHandler(startDate, endDate);
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getPaymentsByDateRange;
