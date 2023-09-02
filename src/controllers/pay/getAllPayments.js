const getAllPaymentsHandler = require('../../handlers/pay/getAllPaymentsHandler');

async function getAllPayments(req, res) {
  try {
    const payments = await getAllPaymentsHandler();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getAllPayments;
