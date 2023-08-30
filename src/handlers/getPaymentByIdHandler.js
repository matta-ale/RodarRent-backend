const { Pay } = require('../db');

async function getPaymentByIdHandler(id) {
  const payment = await Pay.findByPk(id);
  return payment;
}

module.exports = {
  getPaymentByIdHandler,
};
