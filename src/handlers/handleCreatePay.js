/* eslint-disable object-curly-newline */
const { Pay } = require('../db');

async function handleCreatePay({ amount, date, method, status }) {
  console.log(amount);
  const payment = await Pay.create({
    amount,
    date,
    method,
    status,
  });
  return payment;
}

module.exports = {
  handleCreatePay,
};
