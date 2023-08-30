const { handleCreatePay } = require('../handlers/handleCreatePay');

async function createPay(req, res) {
  console.log(req.body);
  try {
    const payment = await handleCreatePay(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createPay,
};
