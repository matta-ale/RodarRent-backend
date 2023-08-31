const { Customer } = require('../db');
const CustomError = require('../utils/customError');

const bulkCreateCustomersHandler = async (data) => {
    try {
      const customers = await Customer.bulkCreate(data);
        return customers;
    } catch (error) {
      throw error;
    }
};

module.exports = bulkCreateCustomersHandler;
