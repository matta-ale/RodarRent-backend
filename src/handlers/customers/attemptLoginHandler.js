const { Customer } = require('../../db');
const CustomError = require('../../utils/customError');
const bcrypt = require('bcrypt');

const attemptLoginHandler = async (email, password) => {
  try {

    const customer = await Customer.findOne({
      where: { email: email, isActive: true },
    });
    if (!customer) {
      throw new CustomError(`There's no customer matching email ${email}`, 404);
    }
    const passwordMatch = password === customer.password
    if (!passwordMatch) {
      throw new CustomError(`Incorrect password for email ${email}`, 401); // Use 401 for authentication failure.
    }
    return 'Login successful';
  } catch (error) {
    throw new CustomError(error.message, 500);
  }
};

module.exports = attemptLoginHandler;
