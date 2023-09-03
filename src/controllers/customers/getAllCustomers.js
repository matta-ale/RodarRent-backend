const getAllCustomersHandler = require('../../handlers/customers/getAllCustomersHandler')

const getAllCustomers = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const customers = await getAllCustomersHandler(page,pageSize);
    res.status(200).json(customers);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = getAllCustomers;
