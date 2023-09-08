const mercadopago = require("mercadopago");
require("dotenv").config();

const createOrder = async (req, res) => {
  const access_token = process.env.ACCESS_TOKEN;
  mercadopago.configure({
    access_token: access_token,
  });
  const product = req.body.product;

  const back_urls = {
    success: "http://localhost:3001/success",
    failure: "http://localhost:3001/failure",
    pending: "http://localhost:3001/pending",
  };
  const notification_url = "https://27d2-190-178-64-139.ngrok.io/webhook";
  const preference = {
    items: [
      {
        //id: id de la reserva
        //category_id: ver en MP
        //description: alguna descripcion de la reserva
        title: "rent Car test",
        quantity: 1,
        currency_id: "ARS",
        unit_price: 500,
      },
    ],
    back_urls: back_urls,
    notification_url: notification_url,
  };
  try {
    const response = await mercadopago.preferences.create(preference);
    console.log(response.body.items);
    const payLink = response.body.init_point;
    res.send(`<a href=${payLink}>Ir a Pagar</a>`);
  } catch (error) {
    res.status(500).json({ error: "Error generating payment link" });
  }
};

module.exports = createOrder;
