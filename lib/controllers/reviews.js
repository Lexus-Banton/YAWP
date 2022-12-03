const { Router } = require('express');
const authenticate = require('../middleware/authenticate.js');
const { Review } = require('../models/Review.js');
const Rauth = require('../middleware/Rauth.js');

module.exports = Router().delete(
  '/:id',
  [authenticate, Rauth],
  async (req, res, next) => {
    try {
      const review = await Review.delete(req.params.id);
      if (!review) next();
      res.json(review);
    } catch (e) {
      next(e);
    }
  }
);
