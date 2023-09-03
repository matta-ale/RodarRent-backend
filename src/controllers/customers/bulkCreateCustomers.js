const bulkCreateCustomersHandler = require('../../handlers/customers/bulkCreateCustomersHandler')

const bulkCreateCustomers = async (req, res) => {
  const data = req.body;
  try {
    const customer = await bulkCreateCustomersHandler(data);
    res.status(200).json(customer);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = bulkCreateCustomers;
