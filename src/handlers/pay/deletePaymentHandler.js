const { Pay } = require('../../db');

async function deletePaymentByIdHandler(id) {
  const payment = await Pay.findByPk(id);
  if (payment) {
    await payment.update({ status: 'deleted' });
    return true;
  }
  return false;
}

module.exports = deletePaymentByIdHandler;
