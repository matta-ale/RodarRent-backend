const { Customer } = require('../../db');
const CustomError = require('../../utils/customError');

const updateCustomerHandler = async (data) => {
  const { id } = data;

  try {
    const updated = await Customer.update(data, {
      where: { id:id, isActive:true }, return: true, raw:true,
    });
    if (updated[0]===0) {
      throw new CustomError(`Can't update customer with id ${id}`, 400);
    } else {
      return `customer with id ${id} succesfully updated`;
    }
  } catch (error) {
    throw new CustomError(error.message,500);
  }
};

module.exports = updateCustomerHandler;
