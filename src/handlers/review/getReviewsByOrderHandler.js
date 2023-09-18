const { Review } = require('../../db');

async function getReviewsByOrderHandler(order) {
  let reviews;
  if (order === 'desc') {
    reviews = await Review.findAll({
      order: [['rating', 'DESC']],
    });
  } else {
    reviews = await Review.findAll({
      order: [['rating', 'ASC']],
    });
  }

  return reviews;
}

module.exports = getReviewsByOrderHandler;
