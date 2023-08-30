const { Customer } = require('../db');

const deleteCustomerByIdHandler = async (id) => {
  try {
    const deletedCustomer = await Customer.destroy({ where: { idCustomer: id } });
    if(!deletedCustomer) throw new Error(`There's no customer matching id ${id}`)
    return deletedCustomer
  } catch (error) {
    throw error;
  }
};

module.exports = deleteCustomerByIdHandler;
