const { Router } = require('express');
const createCustomer = require('../controllers/createCustomer');
const getAllCustomers = require('../controllers/getAllCustomers');
const router = Router();

router.get('/hc',(req,res) => {  //healthcheck
    res.status(200).send('Server up')
})

router.post('/customers',createCustomer)
router.get('/customers',getAllCustomers)




module.exports = router;
