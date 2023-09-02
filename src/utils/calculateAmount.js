const calculateAmount = (startDate, finishDate, pricePerDay) => {
  const days = Math.ceil(
    (new Date(finishDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
  );
  const totalPrice = days * pricePerDay;
  return totalPrice;
};

module.exports = {
  calculateAmount,
};
