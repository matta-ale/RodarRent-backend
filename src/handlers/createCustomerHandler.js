const { Customer } = require('../db');

const createCustomerHandler = async (data) => {
  const {
    name,
    lastName,
    birthDate,
    address,
    city,
    country,
    zipCode,
    phoneNumber,
    email,
  } = data;
  
  if (
    !name ||
    !lastName ||
    !birthDate ||
    !address ||
    !city ||
    !country ||
    !zipCode ||
    !phoneNumber ||
    !email
  ) {
    throw new Error('Please complete all the data');
  } else {
    try {
      const [customer, created] = await Customer.findOrCreate({
        where: { email },
        defaults: {
          name,
          lastName,
          birthDate,
          address,
          city,
          country,
          zipCode,
          phoneNumber,
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
        throw new Error('Customer already registered');
      } else {
        return customer;
      }
    } catch (error) {
      throw error;
    }
  }
};

module.exports = createCustomerHandler;
