const updateCustomerHandler = require('../../handlers/customers/updateCustomerHandler');

const updateCustomer = async (req, res) => {
  const data = req.body;
  try {
    const customer = await updateCustomerHandler(data);
    res.status(200).json(customer);
  } catch (error) {
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(error).json({ error: error.message });
    }
  }
};

module.exports = updateCustomer;
