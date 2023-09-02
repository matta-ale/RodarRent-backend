const { Router } = require('express');

const createCustomer = require('../controllers/customers/createCustomer');
const bulkCreateCustomers = require('../controllers/customers/bulkCreateCustomers');
const getAllCustomers = require('../controllers/customers/getAllCustomers');
const getFilteredCustomers = require('../controllers/customers/getFilteredCustomers');
const updateCustomer = require('../controllers/customers/updateCustomer');
const getCustomerById = require('../controllers/customers/getCustomerById');
const deleteCustomerById = require('../controllers/customers/deleteCustomerById');
const createCustomerValidation = require('../middlewares/createCustomerValidation');
const getCustomerByIdValidation = require('../middlewares/getCustomerByIdValidation');
const deleteCustomerByIdValidation = require('../middlewares/deleteCustomerByIdValidation');

const postPayValidate = require('../middlewares/pay/postPayValidate');
const createVehicles = require('../controllers/vehicles/createVehicles');
const postVehiclesValidate = require('../middlewares/postVehiclesValidate');
const postBookingValidate = require('../middlewares/postBookingValidate');
const createBooking = require('../controllers/createBooking');
const { createPay } = require('../controllers/pay/createPay');
const { getAllPayments } = require('../controllers/pay/getAllPayments');
const { getPaymentById } = require('../controllers/pay/getPaymentById');
const { getAllBookings } = require('../controllers/getAllBookings');
const getVehicleByDomain = require('../controllers/vehicles/getVehicleByDomain');
const getAllVehicles = require('../controllers/vehicles/getAllVehicles');
const { getAllLocations } = require('../controllers/getAllLocations');
const { createLocation } = require('../controllers/createLocation');
const updateVehicle = require('../controllers/vehicles/updateVehicle');
const getAllAvailable = require('../controllers/vehicles/getAllAvailable');
const { getLocationById } = require('../controllers/getLocationById');
const { getBookingById } = require('../controllers/getBookingById');

const router = Router();

router.get('/hc', (req, res) => {
  // healthcheck
  res.status(200).send('Server up');
});

router.post('/vehicles', postVehiclesValidate, createVehicles);
router.get('/vehicles/:domain', getVehicleByDomain);
router.get('/vehicles', getAllVehicles);
router.put('/vehicles', updateVehicle);
router.post('/customers/bulk', bulkCreateCustomers);
router.post('/customers', createCustomerValidation, createCustomer);
router.get('/customers', getAllCustomers);
router.get('/customers/filter', getFilteredCustomers);
router.get('/customers/:id', getCustomerByIdValidation, getCustomerById);
router.put('/customers', createCustomerValidation, updateCustomer);
router.delete('/customers/:id', deleteCustomerByIdValidation, deleteCustomerById);
router.post('/payments', postPayValidate, createPay);
router.get('/payments', getAllPayments);
router.get('/payments/:id', getPaymentById);
router.get('/bookings', getAllBookings);
router.post('/bookings', postBookingValidate, createBooking);
router.get('/bookings/:id', getBookingById);
router.get('/locations', getAllLocations);
router.post('/locations', createLocation);
router.get('/locations/:id', getLocationById);
router.get('/available', getAllAvailable);

module.exports = router;
