// const { Router } = require('express');
// //const authenticate = require('../middleware/authenticate.js');
// const { Reviews } = require('../models/Review.js');

// module.exports = Router().get('/:id', async (req, res, next) => {
//   try {
//     const review = await Reviews.getReviewById(req.params.id);
//     if (!review) next();
//     res.json(review);
//   } catch (e) {
//     next(e);
//   }
// });
