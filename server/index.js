const express = require('express');
const app = express();
const dbo = require('./db/conn');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');

dbo.connectToServer(function(err) {
  if (err) {
    console.error(err);
    process.exit();
  }
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

module.exports = app;
