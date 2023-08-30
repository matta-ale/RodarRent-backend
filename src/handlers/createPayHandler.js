/* eslint-disable object-curly-newline */
const { Pay } = require('../db');

async function createPayHandler({ amount, date, method, status }) {
  const payment = await Pay.create({
    amount,
    date,
    method,
    status,
  });
  return payment;
}

module.exports = {
  createPayHandler,
};
