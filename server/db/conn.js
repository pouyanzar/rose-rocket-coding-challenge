const {MongoClient} = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {useNewUrlParser:true, useUnifiedTopology: true});

let dbConnect;

module.exports = {
  connectToServer: function(callback) {
    client.connect(function(err, db) {
      if (err || !db) {
        return callback(err);
      }
      dbConnect = db.db(`${process.env.DB_NAME}`);
      console.log('connected to database');
      return callback();
    });
  },
  getDb: function() {
    return dbConnect;
  }
};
