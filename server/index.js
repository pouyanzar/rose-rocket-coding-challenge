const express = require('express');
const app = express();
const pool = require('./db/conn');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const driversRouter = require('./routes/drivers');
const ordersRouter = require('./routes/orders');

app.use('/', indexRouter);
app.use('/drivers', driversRouter(pool));
app.use('/orders', ordersRouter(pool));

module.exports = app;
