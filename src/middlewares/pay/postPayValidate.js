/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
const postPayValidate = (req, res, next) => {
  const { amount, date, method, status } = req.body;

  if (!amount) return res.status(404).json({ error: 'Missing amount' });
  if (!date) return res.status(404).json({ error: 'Missing date' });
  if (!method) return res.status(404).json({ error: 'Missing pay method' });
  if (!status) return res.status(404).json({ error: 'Missing status' });

  next();
};

module.exports = postPayValidate;
