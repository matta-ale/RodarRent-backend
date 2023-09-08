const mercadopago = require("mercadopago");

const receiveWebhook = (req, res) => {
  try {
    console.log("notification payment received:", req.body);

    //guardar en BDD el id de payment
    res.sendStatus(200);
  } catch (error) {
    console.error("error notification payment:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = receiveWebhook;
