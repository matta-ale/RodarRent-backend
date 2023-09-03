const { Router } = require('express');

const {
  createCustomer,
  bulkCreateCustomers,
  getAllCustomers,
  getFilteredCustomers,
  updateCustomer,
  getCustomerById,
  deleteCustomerById,
} = require('../../controllers/customers');

const {
  createCustomerValidation,
  getCustomerByIdValidation,
  deleteCustomerByIdValidation,
} = require('../../middlewares/customers');

const router = Router();

router.post("/customers/bulk", bulkCreateCustomers);
router.post("/customers", createCustomerValidation, createCustomer);
router.get("/customers", getAllCustomers);
router.get("/customers/filter", getFilteredCustomers);
router.get("/customers/:id", getCustomerByIdValidation, getCustomerById);
router.put("/customers", createCustomerValidation, updateCustomer);
router.delete("/customers/:id",deleteCustomerByIdValidation,deleteCustomerById);

module.exports = router;
