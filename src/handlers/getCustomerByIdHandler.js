const { Customer } = require('../db');

const getCustomerByIdHandler = async (id) => {
  try {
    const customer = await Customer.findByPk(id);
    if(!customer) throw new Error(`There's no customer matching id ${id}`)
    return customer
  } catch (error) {
    throw error;
  }
};

module.exports = getCustomerByIdHandler;
