const { Router } = require('express');
const { Restaurant } = require('../models/Restaurant.js');
//const { Review } = require('../models/Review.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const restaurants = await Restaurant.getAll();
    res.json(restaurants);
  })
  .get('/:id', async (req, res) => {
    const restaurant = await Restaurant.getById(req.params.id);
    await restaurant.addReviews();
    res.json(restaurant);
  });
