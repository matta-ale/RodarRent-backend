const createCustomerHandler = require('../../handlers/customers/createCustomerHandler')

const createCustomer = async (req, res) => {
  const data = req.body;
  try {
    const customer = await createCustomerHandler(data);
    res.status(200).json(customer);
  } catch (error) {
    res.status(error.statusCode?error.statusCode:500).json({ error: error.message });
  }
};

module.exports = createCustomer;
