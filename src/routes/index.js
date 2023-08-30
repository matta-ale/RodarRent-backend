const { Router } = require('express');

const postValidate = require('../middlewares/postValidate');
const createCustomer = require('../controllers/createCustomer');
const getAllCustomers = require('../controllers/getAllCustomers');
const getCustomerById = require('../controllers/getCustomerById');
const deleteCustomerById = require('../controllers/deleteCustomerById');
const { createPay } = require('../controllers/createPay');
const { getAllPayments } = require('../controllers/getAllPayments');
const createCustomerValidation = require('../middlewares/createCustomerValidation');
const getCustomerByIdValidation = require('../middlewares/getCustomerByIdValidation');
const deleteCustomerByIdValidation = require('../middlewares/deleteCustomerByIdValidation');

const router = Router();

router.get('/hc', (req, res) => {
  // healthcheck
  res.status(200).send('Server up');
});

router.post('/customers',createCustomerValidation, createCustomer);
router.get('/customers', getAllCustomers);
router.get('/customers/:id',getCustomerByIdValidation, getCustomerById);
router.delete('/customers/:id',deleteCustomerByIdValidation, deleteCustomerById);
router.post('/payments', postValidate, createPay);
router.get('/payments', getAllPayments);

module.exports = router;
