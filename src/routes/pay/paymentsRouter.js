const { Router } = require('express');

const {
  createPay,
  getAllPayments,
  getPaymentById,
  getPaymentsByDateRange,
  updatePayment,
  deletePaymentByIdLogic,
} = require('../../controllers/pay');

const {
  postPayValidate,
  getPaymentsByDateRangeValidate,
  updatePaymentValidate,
  deletePaymentByIdLogicValidate,
} = require('../../middlewares/pay');

const router = Router();

router.get('/hc', (req, res) => {
  // healthcheck
  res.status(200).send('Server up');
});

router.post('/payments', postPayValidate, createPay);

router.get('/payments', getAllPayments);

router.get('/payments/:id', getPaymentById);

router.get(
  '/payment/date',
  getPaymentsByDateRangeValidate,
  getPaymentsByDateRange,
);

router.put('/payments/:id', updatePaymentValidate, updatePayment);

router.delete(
  '/payments/:id',
  deletePaymentByIdLogicValidate,
  deletePaymentByIdLogic,
);

module.exports = router;
