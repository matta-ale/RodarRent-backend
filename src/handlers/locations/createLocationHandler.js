const { Location } = require("../../db");

const createLocationHandler = async ({
  address,
  city,
  country,
  zipCode,
  alias,
}) => {
  const location = await Location.create({
    address,
    city,
    country,
    zipCode,
    alias,
  });
  return location;
};

module.exports = {
  createLocationHandler,
};
