const express = require('express');
const app = express();
const dbo = require('./db/conn');

dbo.connectToServer(function(err) {
  if (err) {
    console.error(err);
    process.exit();
  }
});


app.get('/', (req, res) => {
  res.send("Hello");
});

app.listen(3000);