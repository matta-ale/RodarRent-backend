const createPay = require('./createPay');
const getAllPayments = require('./getAllPayments');
const getPaymentById = require('./getPaymentById');
const getPaymentsByDateRange = require('./getPaymentsByDateRange');
const updatePayment = require('./updatePayment');
const deletePaymentByIdLogic = require('./deletePaymentByIdLogic');
const getPaymentsInDateOrder = require('./getPaymentsInDateOrder');

module.exports = {
  createPay,
  getAllPayments,
  getPaymentById,
  getPaymentsByDateRange,
  updatePayment,
  deletePaymentByIdLogic,
  getPaymentsInDateOrder,
};
