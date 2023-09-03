const { Customer } = require('../../db');
const CustomError = require('../../utils/customError');

const getCustomerByIdHandler = async (id) => {
  try {
    const customer = await Customer.findOne({ where: { id:id,isActive:true } });
    
    if(!customer) throw new CustomError(`There's no customer matching id ${id}`,404)
    return customer
  } catch (error) {
    throw new CustomError(error.message,500);
  }
};

module.exports = getCustomerByIdHandler;
