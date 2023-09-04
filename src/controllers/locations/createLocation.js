const {
  createLocationHandler,
} = require("../../handlers/locations/createLocationHandler");
const CustomError = require("../../utils/customError");

const createLocation = async (req, res) => {
  const data = req.body;
  try {
    const newLocation = await createLocationHandler(data);
    res.status(201).json(newLocation);
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = createLocation;
