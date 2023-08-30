const { Router } = require('express');

const postValidate = require('../middlewares/postValidate');
const createCustomer = require('../controllers/createCustomer');
const createVehicle = require('../controllers/createVehicle');
const getAllCustomers = require('../controllers/getAllCustomers');
const { createPay } = require('../controllers/createPay');
const { getAllPayments } = require('../controllers/getAllPayments');
//const getAvailable = require('../controllers/getAvailable');

const router = Router();

router.get('/hc', (req, res) => {
  // healthcheck
  res.status(200).send('Server up');
});

router.post('/customers',createCustomer)
router.get('/customers',getAllCustomers)
router.post('/payments', postValidate, createPay);
router.post('/vehicles', createVehicle)
//router.get('/search', getAvailable)



module.exports = router;
