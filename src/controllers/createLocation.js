const { createLocationHandler } = require('../handlers/createLocationHandler')

const createLocation = async (req, res) => {
  const data = req.body;
  try {
    const newLocation = await createLocationHandler(data);
    res.status(200).json(newLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createLocation 
};