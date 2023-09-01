const { Op } = require('sequelize');
const { Pay } = require('../../db');

async function getPaymentsByDateRangeHandler(startDate, endDate) {
  try {
    const payments = await Pay.findAll({
      where: {
        date: {
          [Op.between]: [startDate, endDate],
        },
      },
    });
    return payments;
  } catch (error) {
    throw new Error(
      `Error retrieving payments by date range: ${error.message}`,
    );
  }
}

module.exports = getPaymentsByDateRangeHandler;
