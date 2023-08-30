const { Router } = require('express');

const postPayValidate = require('../middlewares/postPayValidate');
const createCustomer = require('../controllers/createCustomer');
const getAllCustomers = require('../controllers/getAllCustomers');
const { createPay } = require('../controllers/createPay');
const { getAllPayments } = require('../controllers/getAllPayments');
const { getPaymentById } = require('../controllers/getPaymentById');

const router = Router();

router.get('/hc', (req, res) => {
  // healthcheck
  res.status(200).send('Server up');
});

router.post('/customers', createCustomer);
router.get('/customers', getAllCustomers);
router.post('/payments', postPayValidate, createPay);
router.get('/payments', getAllPayments);
router.get('/payments/:id', getPaymentById);

module.exports = router;
