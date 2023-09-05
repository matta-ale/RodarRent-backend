//acá creo mi server. en index.js conecto sequelize con el server
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const paymentsRouter = require('./routes/pay/paymentsRouter');
const customersRouter = require('./routes/customers/customersRouter.js');
const vehiclesRouter = require('./routes/vehicles/vehiclesRouter.js');
const bookingsRouter = require('./routes/bookings/bookingsRouter.js');
const locationsRouter = require('./routes/locations/locationsRouter.js');
const cookieSession = require('cookie-session')
const passport = require('passport')
const cors = require('cors')
const passportSetup = require('../passport.js')

const server = express();
server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieSession({
  name: 'session',
  keys: ['cyberwolve'],
  maxAge: 24*60*60*100,
}));
server.use(cookieParser());
server.use(passport.initialize());
server.use(passport.session());
server.use(
  cors({
    origin:'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials:true,
  })
)
server.use(morgan('dev'));

server.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//server.use('/', routes);
server.use("/", paymentsRouter);
server.use("/", customersRouter);
server.use("/", vehiclesRouter);
server.use("/", bookingsRouter);
server.use("/", locationsRouter);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
