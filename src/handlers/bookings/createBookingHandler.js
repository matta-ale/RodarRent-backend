const { Booking, Vehicle, Location, Customer } = require("../../db");
const { calculateAmount } = require("../../utils/calculateAmount");

const createBookingHandler = async (data) => {
  const {
    VehicleId,
    CustomerId,
    startDate,
    finishDate,
    pricePerDay,
    pickUpLocationId,
    returnLocationId,
  } = data;
  // calcular amount
  const amount = calculateAmount(startDate, finishDate, pricePerDay);
  //creamos la reserva en la BDD
  const booking = await Booking.create({
    //cambiar estos nombres luego del arreglo(customer y domain)
    CustomerId,
    VehicleId,
    amount,
    startDate,
    finishDate,
    pickUpLocationId,
    returnLocationId,
  });
  return booking;
};

module.exports = {
  createBookingHandler,
};
