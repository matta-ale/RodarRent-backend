const { Customer } = require('../../db');
const CustomError = require('../../utils/customError');

const deleteCustomerByIdHandler = async (data) => {
  const {Customerid} = data
  data.isActive=false;
  
  try {
    const deletedCustomer = await Customer.update(data, {
      where: { Customerid }, return: true, raw:true,
    });
    if(!deletedCustomer) throw new CustomError(`There's no customer matching id ${Customerid}`,404)
    return deletedCustomer
  } catch (error) {
    throw error;
  }
};

module.exports = deleteCustomerByIdHandler;
