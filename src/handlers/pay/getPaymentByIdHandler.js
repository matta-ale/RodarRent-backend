const { Op } = require('sequelize');
const { Pay } = require('../../db');

async function getPaymentByIdHandler(id) {
  const payment = await Pay.findOne({
    where: {
      id,
      status: {
        [Op.ne]: 'deleted',
      },
    },
  });
  return payment;
}

module.exports = getPaymentByIdHandler;
