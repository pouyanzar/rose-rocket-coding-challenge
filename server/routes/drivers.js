const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  router.get('/', (req, res) => {
    const query = "SELECT * FROM drivers";
    pool.query(query, (error, results) => {
      // if (!results[0]) {
      //   res.json({status: "There is no driver"});
      // } else {
        // res.json(results[0]);
        console.log(pool);
      // }
    });
  });

  return router;
};