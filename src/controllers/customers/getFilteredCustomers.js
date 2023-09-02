const getFilteredCustomersHandler = require('../../handlers/customers/getFilteredCustomersHandler')

const getFilteredCustomers = async (req, res) => {
  const data = req.query
  try {
    const filteredCustomers = await getFilteredCustomersHandler(data);
    res.status(200).json(filteredCustomers);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = getFilteredCustomers;
