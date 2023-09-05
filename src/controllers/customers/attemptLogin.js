const attemptLoginHandler = require('../../handlers/customers/attemptLoginHandler')

const attemptLogin = async (req, res) => {
  const {email,password} = req.body
  try {
    const customer = await attemptLoginHandler(email,password);
    res.status(200).json(customer);
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = attemptLogin;