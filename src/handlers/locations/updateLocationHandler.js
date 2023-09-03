const { Location } = require("../../db");
const CustomError = require("../../utils/customError");

const updateLocationHandler = async (data, id) => {
  try {
    const updatedLocation = await Location.update(data, {
      where: { id },
      return: true,
      raw: true,
    });
    if (updatedLocation[0] === 0) {
      throw new CustomError(`Can't update location with id ${id}`, 400);
    } else {
      return `Location with id ${id} succesfully updated`;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateLocationHandler,
};
