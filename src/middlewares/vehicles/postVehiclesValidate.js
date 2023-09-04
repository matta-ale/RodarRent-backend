
const postVehiclesValidate = (req, res, next) => {

    const data = req.body

    data.forEach(vehicle => {
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
        } = vehicle;
      
        if (!domain) return res.status(404).json({ error: 'Missing domain' });
        if (!brand) return res.status(404).json({ error: `Missing brand in ${domain}` });
        if (!model) return res.status(404).json({ error: `Missing model in ${domain}` });
        if (!year) return res.status(404).json({ error: `Missing year in ${domain}` });
        if (!type) return res.status(404).json({ error: `Missing type in ${domain}` });
        if (!passengers) return res.status(404).json({ error: `Missing passengers in ${domain}` });
        if (!transmission) return res.status(404).json({ error: `Missing transmission in ${domain}` });
        if (!fuel) return res.status(404).json({ error: `Missing fuel in ${domain}` });
        if (!pricePerDay) return res.status(404).json({ error: `Missing pricePerDay in ${domain}` });
        if (!image) return res.status(404).json({ error: `Missing image in ${domain}` });

    })
  
    next();
};

module.exports = postVehiclesValidate;