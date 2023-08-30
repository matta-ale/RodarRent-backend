
const postVehicleValidate = (req, res, next) => {
    const { 
        domain,
        brand,
        model,
        year,
        type,
        passengers,
        transmission,
        fuel,
        pricePerDay,
        availability,
        image
    } = req.body;
  
    if (!domain) return res.status(404).json({ error: 'Missing domain' });
    if (!brand) return res.status(404).json({ error: 'Missing brand' });
    if (!model) return res.status(404).json({ error: 'Missing pay model' });
    if (!year) return res.status(404).json({ error: 'Missing year' });
    if (!type) return res.status(404).json({ error: 'Missing type' });
    if (!passengers) return res.status(404).json({ error: 'Missing passengers' });
    if (!transmission) return res.status(404).json({ error: 'Missing transmission' });
    if (!fuel) return res.status(404).json({ error: 'Missing fuel' });
    if (!pricePerDay) return res.status(404).json({ error: 'Missing pricePerDay' });
    if (!image) return res.status(404).json({ error: 'Missing image' });
  
    next();
};

module.exports = postVehicleValidate;