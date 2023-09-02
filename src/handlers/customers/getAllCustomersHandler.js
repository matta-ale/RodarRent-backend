const { Customer } = require('../../db');

const getAllCustomersHandler = async (data) => {
  try {
    const customers = await Customer.findAll();
    if(!customers) throw new Error('No customers in database')
    return customers
  } catch (error) {
    throw error;
  }
};

module.exports = getAllCustomersHandler;
