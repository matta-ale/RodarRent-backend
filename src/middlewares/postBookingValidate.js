const { Customer, Vehicle } = require("../db");

const postBookingValidate = async (req, res, next) => {
  const {
    startDate,
    finishDate,
    pickUpLocationId,
    returnLocationId,
    idCustomer,
    vehicleDomain,
    pricePerDay,
  } = req.body;

  if (!startDate) return res.status(404).json({ error: "Missing start date" });
  if (!finishDate)
    return res.status(404).json({ error: "Missing finish date" });
  if (!pickUpLocationId)
    return res.status(404).json({ error: "Missing pick up location" });
  if (!returnLocationId)
    return res.status(404).json({ error: "Missing return location" });
  if (!idCustomer) return res.status(404).json({ error: "Missing customer" });
  if (!vehicleDomain)
    return res.status(404).json({ error: "Missing vehicle domain" });
  if (!pricePerDay)
    return res.status(404).json({ error: "Missing price per day" });
  const customer = await Customer.findByPk(idCustomer);
  if (!customer) return res.status(404).json({ error: "Customer not found" });
  // const vehicle = await Vehicle.findByPk(vehicleDomain);
  // if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });
  next();
};

module.exports = postBookingValidate;
