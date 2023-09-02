const { Location } = require("../../db");
const CustomError = require("../../utils/customError");

const getLocationByIdHandler = async (id) => {
  try {
    const location = await Location.findByPk(id);

    if (!location)
      throw new CustomError(`There's no location matching id ${id}`, 404);
    return location;
  } catch (error) {
    throw new CustomError(error.message, 500);
  }
};

module.exports = {
  getLocationByIdHandler,
};
