const { Customer } = require('../db');
const CustomError = require('../utils/customError');

const getCustomerByIdHandler = async (id) => {
  try {
    const customer = await Customer.findByPk(id);
    if(!customer) throw new CustomError(`There's no customer matching id ${id}`,404)
    return customer
  } catch (error) {
    throw error;
  }
};

module.exports = getCustomerByIdHandler;
