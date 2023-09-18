const { Review } = require('../../db');

async function getAllReviewsHandler() {
  const reviews = await Review.findAll();
  return reviews;
}

module.exports = getAllReviewsHandler;
