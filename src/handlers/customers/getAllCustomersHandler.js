const { Customer } = require('../../db');
const CustomError = require('../../utils/customError');

const getAllCustomersHandler = async (page,pageSize) => {
  try {
    const offset = (page-1)*pageSize
    const customers = await Customer.findAndCountAll({
      where: {isActive:true},
      offset,
      limit: pageSize,
    });
    if(customers.rows.length===0) throw new CustomError('No customers in database',400);
    const totalPages = Math.ceil(customers.count / pageSize);

    const pagination = {
      currentPage: page,
      pageSize: pageSize,
      totalItems: customers.count,
      totalPages: totalPages,
      nextPage: page < totalPages ? page + 1 : null,
      prevPage: page > 1 ? page - 1 : null,
    };

    return { data: customers.rows, pagination };
  } catch (error) {
    throw new CustomError(error.message,500);
  }
};

module.exports = getAllCustomersHandler;
