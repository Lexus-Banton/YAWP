const { Review } = require('../models/Review.js');

module.exports = async (req, res, next) => {
  try {
    const reviews = await Review.getReviewById(req.params.id);

    if (
      req.user &&
      (req.user.id === reviews.user_id || req.user.email === 'admin')
    ) {
      next();
    } else {
      throw new Error('Unauthorized');
    }
  } catch (e) {
    e.status = 403;
    next(e);
  }
};
