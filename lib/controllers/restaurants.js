const { Router } = require('express');
const { Restaurant } = require('../models/Restaurant.js');
const pool = require('../utils/pool.js');

module.exports = Router().get('/', async (req, res) => {
  const restaurants = await Restaurant.getAll();
  res.json(restaurants);
});
