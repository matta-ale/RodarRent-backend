const getAllCustomersHandler = require('../../handlers/customers/getAllCustomersHandler')

const getAllCustomers = async (req, res) => {
  try {
    const customers = await getAllCustomersHandler();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllCustomers;
