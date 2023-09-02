const { Location } = require("../../db");

const createLocationHandler = async ({ address, city, country, zipCode }) => {
  const location = await Location.create({
    address,
    city,
    country,
    zipCode,
  });
  return location;
};

module.exports = {
  createLocationHandler,
};
