const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  router.get('/', (req, res) => {
    res.send('orders');
  });

  return router;
};