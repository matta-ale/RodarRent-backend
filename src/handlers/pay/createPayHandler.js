/* eslint-disable object-curly-newline */
const { Pay } = require('../../db');
const CustomError = require('../../utils/customError');

async function createPayHandler({ amount, date, method, status }) {
  try {
    const payment = await Pay.create({
      amount,
      date,
      method,
      status,
    });
    if (!payment) {
      throw new CustomError('Failed to create payment', 500);
    }
    return payment;
  } catch (error) {
    throw new CustomError(error.message, 500);
  }
}

module.exports = {
  createPayHandler,
};
