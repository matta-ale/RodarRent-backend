const { Pay } = require('../../db');

async function updatePaymentHandler(id, data) {
  let payment;
  try {
    payment = await Pay.findByPk(id);
    if (!payment) {
      // Error del cliente: no se encontró el pago
      return { error: 'Payment not found', status: 404 };
    }
    await payment.update(data);
  } catch (error) {
    // Error del servidor: algo salió mal al intentar actualizar el pago
    return { error: error.message, status: 500 };
  }
  return { payment, status: 200 };
}

module.exports = updatePaymentHandler;
