const { Pay } = require('../../db');

async function getPaymentsInDateOrderHandler(order) {
  try {
    const pays = await Pay.findAll({
      order: [['date', order]],
    });

    return pays;
  } catch (error) {
    throw new Error(`Failed to get pays in order: ${error.message}`);
  }
}

module.exports = getPaymentsInDateOrderHandler;
