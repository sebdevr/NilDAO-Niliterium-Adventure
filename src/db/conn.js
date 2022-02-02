const { MongoClient } = require("mongodb");
const mongoose = require('mongoose')
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connect(Db);

var NilXP = new mongoose.Schema({
  userName: {type: String},
  userId: {type: String},
  firstTimeSendMsg: {type: Boolean},
  messagesSent: {type: Number},
  score: {type: Number},
  gm: {type: Number},
  lfg: {type: Number},
  miniGames: {coinFlip: {wins: Number, losses: Number}}
})
 
var _db;
 
module.exports = {
  NilXP: mongoose.model('nil-xps', NilXP),
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("myFirstDatabase");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};