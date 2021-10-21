const express = require('express');
const app = express();
const dbParams = require('./db/conn');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const {Pool} = require('pg');

const db = new Pool({dbParams, ssl: {
  rejectUnauthorized: false,
}});
db.connect();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const driversRouter = require('./routes/drivers');
const ordersRouter = require('./routes/orders');

app.use('/', indexRouter);
app.use('/drivers', driversRouter(db));
app.use('/orders', ordersRouter(db));

module.exports = app;
