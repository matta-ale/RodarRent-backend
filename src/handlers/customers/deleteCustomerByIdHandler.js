const { Customer } = require('../../db');
const CustomError = require('../../utils/customError');

const deleteCustomerByIdHandler = async (id) => {
  
  try {
    const deletedCustomer = await Customer.update({isActive:false}, {
      where: { id:id }, return: true, raw:true,
    });
    if(!deletedCustomer) throw new CustomError(`There's no customer matching id ${Customerid}`,404)
    return deletedCustomer
  } catch (error) {
    throw new CustomError(error.message,500);
  }
};

module.exports = deleteCustomerByIdHandler;
