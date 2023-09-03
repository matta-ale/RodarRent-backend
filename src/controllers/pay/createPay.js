/* eslint-disable no-undef */
const createPayHandler = require('../../handlers/pay/createPayHandler');
const CustomError = require('../../utils/customError');

async function createPay(req, res) {
  try {
    const payment = await createPayHandler(req.body);
    res.status(201).json(payment);
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
module.exports = createPay;
