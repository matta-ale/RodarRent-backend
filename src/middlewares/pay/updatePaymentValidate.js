/* eslint-disable operator-linebreak */
/* eslint-disable no-restricted-globals */
/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
function updatePaymentValidate(req, res, next) {
  const { amount, date, method, status } = req.body;

  // Validate amount
  if (amount !== undefined && typeof amount !== 'number') {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  // Validate date
  if (date !== undefined && isNaN(Date.parse(date))) {
    return res.status(400).json({ error: 'Invalid date' });
  }

  // Validate method
  if (
    method !== undefined &&
    !['credit card', 'bank transfer'].includes(method)
  ) {
    return res.status(400).json({ error: 'Invalid method' });
  }

  // Validate status
  if (status !== undefined && !['paid', 'pending'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  next();
}
module.exports = updatePaymentValidate;
