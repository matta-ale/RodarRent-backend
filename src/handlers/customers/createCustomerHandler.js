const { Customer } = require('../../db');
const CustomError = require('../../utils/customError');
const bcrypt = require('bcrypt');

const createCustomerHandler = async (data) => {
  const {
    name,
    lastName,
    personalId,
    birthDate,
    address,
    city,
    country,
    zipCode,
    phoneNumber,
    email,
    password,
  } = data;
    try {
      const [customer, created] = await Customer.findOrCreate({
        where: { personalId },
        defaults: {
          name,
          lastName,
          birthDate,
          address,
          city,
          country,
          zipCode,
          phoneNumber,
          email,
          password,
        },
        // include: [
        //   {
        //     model: Genre,
        //     where: { id: genreIds },
        //   },
        // ],
      });
      // await videogame.addGenre(genreIds);
      if (!created) {
        throw new CustomError('Customer already registered',400);
      } else {
        return customer;
      }
    } catch (error) {
      throw new CustomError(error.message,500);
    }
};

module.exports = createCustomerHandler;
