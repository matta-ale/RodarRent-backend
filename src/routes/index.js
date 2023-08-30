const { Router } = require('express');

const postPayValidate = require('../middlewares/postPayValidate');
const createCustomer = require('../controllers/createCustomer');
const createVehicle = require('../controllers/createVehicle');
const postVehicleValidate = require('../middlewares/postVehicleValidate');
const getAllCustomers = require('../controllers/getAllCustomers');
const postBookingValidate = require('../middlewares/postBookingValidate');
const createBooking = require('../controllers/createBooking')
const { createPay } = require('../controllers/createPay');
const { getAllPayments } = require('../controllers/getAllPayments');
const { getPaymentById } = require('../controllers/getPaymentById');
const { getAllBookings } = require('../controllers/getAllBookings');

const router = Router();

router.get('/hc', (req, res) => {
  // healthcheck
  res.status(200).send('Server up');
});


router.post('/vehicles', postVehicleValidate, createVehicle)
router.post('/customers', createCustomer);
router.get('/customers', getAllCustomers);
router.post('/payments', postPayValidate, createPay);
router.get('/payments', getAllPayments);
router.get('/payments/:id', getPaymentById);
router.get('/bookings', getAllBookings);
router.post('/bookings', postBookingValidate, createBooking);


module.exports = router;
