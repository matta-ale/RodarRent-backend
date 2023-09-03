const updatePaymentHandler = require('../../handlers/pay/updatePaymentHandler');

async function updatePayment(req, res) {
  const result = await updatePaymentHandler(req.params.id, req.body);
  if (result.error) {
    res.status(result.status).json({ error: result.error });
  } else {
    res.json(result.payment);
  }
}

module.exports = updatePayment;
