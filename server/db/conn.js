const {MongoClient} = require('mongodb');

const password = 'Pouyan6&5&';
const uri = `mongodb+srv://admin:${password}@cluster0.zuezf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {useNewUrlParser:true, useUnifiedTopology: true});


let dbConnect;

module.exports = {
  connectToServer: function(callback) {
    client.connect(function(err, db) {
      if (err || !db) {
        return callback(err);
      }
      dbConnect = db.db('myFirstDatabase');
      console.log('connected to myFirstDatabase');
      return callback();
    });
  },
  getDb: function() {
    return dbConnect;
  }
};
