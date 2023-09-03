const { Op } = require('sequelize');
const { Pay } = require('../../db');

async function getAllPaymentsHandler() {
  const payments = await Pay.findAll({
    where: {
      status: {
        [Op.ne]: 'deleted',
      },
    },
  });
  return payments;
}

module.exports = getAllPaymentsHandler;
