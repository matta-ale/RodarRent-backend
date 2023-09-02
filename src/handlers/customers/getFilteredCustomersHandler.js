const { Customer } = require('../../db');
const { Op } = require('sequelize');
const CustomError = require('../../utils/customError');

const getFilteredCustomers = async (data) => {
  const {name,lastName,city,country,email, orderVar, orderMode, limit} = data
  
  let filterCriteria = {};
  let orderArray = ['lastName','ASC',10]
    
    if (name)  filterCriteria.name = {[Op.like]: `%${name}%`};
    if (lastName)  filterCriteria.lastName = {[Op.like]: `%${lastName}%`};
    if (city) filterCriteria.city = city
    if (country) filterCriteria.country = country
    if (email) filterCriteria.email = email
    if (orderVar) orderArray[0] = orderVar
    if (orderMode) orderArray[1] = orderMode
    if(limit) orderArray[2] = limit
  
    try {
    const customers = await Customer.findAll({
      where: filterCriteria,
      order: [[orderArray[0], orderArray[1]]],
      limit: orderArray[2], 
    });
    if(customers.length===0) throw new CustomError('No customers match that criteria',404)
    return customers
  } catch (error) {
    throw error;
  }
};

module.exports = getFilteredCustomers;
