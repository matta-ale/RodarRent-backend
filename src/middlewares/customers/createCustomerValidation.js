const createCustomerValidation = (req, res, next) => {
  const {name, lastName, personalId,birthDate, address, city, country, zipCode, phoneNumber, email} = req.body;

  if (!name) return res.status(404).json({ error: 'Missing name' });
  if (!lastName) return res.status(404).json({ error: 'Missing last name' });
  if (!personalId) return res.status(404).json({ error: 'Missing id' });
  if (!birthDate) return res.status(404).json({ error: 'Missing birth date' });
  if (!address) return res.status(404).json({ error: 'Missing address' });
  if (!city) return res.status(404).json({ error: 'Missing city' });
  if (!country) return res.status(404).json({ error: 'Missing country' });
  if (!zipCode) return res.status(404).json({ error: 'Missing zip code' });
  if (!phoneNumber) return res.status(404).json({ error: 'Missing phone number' });
  if (!email) return res.status(404).json({ error: 'Missing email' });

  next();
  };

  module.exports = createCustomerValidation;