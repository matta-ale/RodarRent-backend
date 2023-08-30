const { Router } = require('express');
const { createPay } = require('../controllers/createPay');

const router = Router();

router.get('/hc', (req, res) => {
  // healthcheck
  res.status(200).send('Server up');
});

router.post('/payments', createPay);

module.exports = router;
