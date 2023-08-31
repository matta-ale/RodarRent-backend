const { createPayHandler } = require('../../handlers/pay/createPayHandler');

async function createPay(req, res) {
  try {
    const payment = await createPayHandler(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createPay,
};
