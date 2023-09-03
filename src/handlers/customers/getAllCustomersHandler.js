const { Customer } = require('../../db');

const getAllCustomersHandler = async (page,pageSize) => {
  try {
    const offset = (page-1)*pageSize
    const customers = await Customer.findAndCountAll({
      where: {isActive:true},
      offset,
      limit: pageSize,
    });
    if(customers.rows.length===0) throw new Error('No customers in database')
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
    throw error;
  }
};

module.exports = getAllCustomersHandler;
