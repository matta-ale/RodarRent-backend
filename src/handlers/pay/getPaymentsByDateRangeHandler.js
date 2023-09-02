const { Op } = require('sequelize');
const { Pay } = require('../../db');

async function getPaymentsByDateRangeHandler(startDate, endDate) {
  try {
    const payments = await Pay.findAll({
      where: {
        date: {
          [Op.between]: [new Date(startDate), new Date(endDate)],
        },
        status: {
          [Op.ne]: 'deleted',
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

module.exports = { getPaymentsByDateRangeHandler };
