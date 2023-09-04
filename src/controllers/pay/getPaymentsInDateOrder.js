const getPaymentsInDateOrderHandler = require('../../handlers/pay/getPaymentsInDateOrderHandler');

async function getPaymentsInDateOrder(req, res) {
  try {
    const order = req.query.order || 'ASC';
    const pays = await getPaymentsInDateOrderHandler(order);

    res.json(pays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getPaymentsInDateOrder;
