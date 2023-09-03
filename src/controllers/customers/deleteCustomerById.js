const deleteCustomerByIdHandler = require('../../handlers/customers/deleteCustomerByIdHandler')

const deleteCustomerById = async (req, res) => {
  const {id} = req.params
  try {
    const deletedCustomer = await deleteCustomerByIdHandler(id);
    res.status(200).send(`Customer with id ${id} has been deleted`);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = deleteCustomerById;
