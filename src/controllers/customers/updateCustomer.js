const updateCustomerHandler = require('../../handlers/customers/updateCustomerHandler');

const updateCustomer = async (req, res) => {
  const data = req.body;
  try {
    const customer = await updateCustomerHandler(data);
    res.status(200).json(customer);
  } catch (error) {
    res.status(error.statusCode?error.statusCode:500).json({ error: error.message });
  }
};

module.exports = updateCustomer;
