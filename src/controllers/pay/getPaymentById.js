const getPaymentByIdHandler = require('../../handlers/pay/getPaymentByIdHandler');

async function getPaymentById(req, res) {
  const { id } = req.params;
  try {
    const payment = await getPaymentByIdHandler(id);
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getPaymentById;
