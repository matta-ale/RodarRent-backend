const getCustomerByIdHandler = require('../handlers/getCustomerByIdHandler')

const getCustomerById = async (req, res) => {
  const {id} = req.params
  try {
    const customer = await getCustomerByIdHandler(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCustomerById;