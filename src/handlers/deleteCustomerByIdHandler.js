const { Customer } = require('../db');
const CustomError = require('../utils/customError');

const deleteCustomerByIdHandler = async (id) => {
  try {
    const deletedCustomer = await Customer.destroy({ where: { idCustomer: id } });
    if(!deletedCustomer) throw new CustomError(`There's no customer matching id ${id}`,404)
    return deletedCustomer
  } catch (error) {
    throw error;
  }
};

module.exports = deleteCustomerByIdHandler;
