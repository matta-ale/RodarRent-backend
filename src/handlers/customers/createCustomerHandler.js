const { Customer } = require('../../db');
const CustomError = require('../../utils/customError');

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
      throw error;
    }
};

module.exports = createCustomerHandler;
