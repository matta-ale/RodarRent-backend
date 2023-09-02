const deletePaymentByIdHandler = require('../../handlers/pay/deletePaymentHandler');

async function deletePaymentByIdLogic(req, res) {
  try {
    const result = await deletePaymentByIdHandler(req.params.id);
    if (result) {
      res.status(200).json({ message: 'Successfully deleted' });
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deletePaymentByIdLogic;
