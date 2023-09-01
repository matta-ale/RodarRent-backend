const { Location } = require("../../db");

const getAllLocationsHandler = async () => {
  const locations = await Location.findAll();
  return locations;
};

module.exports = {
  getAllLocationsHandler,
};
