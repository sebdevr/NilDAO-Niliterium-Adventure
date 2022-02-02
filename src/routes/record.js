const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(async function (req, res) {
  // var users =  [    {score: 532, userName: 'test123', },  {score: 632, userName: 'test1243', },  {score: 532, userName: 'rest1243', }, {score: 532, userName: 'test123', },  {score: 632, userName: 'test1243', },  {score: 532, userName: 'rest1243', }, {score: 532, userName: 'test123', },  {score: 632, userName: 'test1243', },  {score: 532, userName: 'rest1243', }, {score: 532, userName: 'test123', },  {score: 632, userName: 'test1243', },  {score: 532, userName: 'rest1243', }, {score: 532, userName: 'test123', },  {score: 632, userName: 'test1243', },  {score: 532, userName: 'rest1243', }, {score: 532, userName: 'test123', },  {score: 632, userName: 'test1243', },  {score: 532, userName: 'rest1243', }, {score: 532, userName: 'test123', },  {score: 632, userName: 'test1243', },  {score: 532, userName: 'rest1243', }];
  // var ids = {}

  // for (var user in users){
  //   if (ids[users[user].score]){
  //     continue
  //   } else {
  //     ids[users[user].score] = parseInt(user) + 1; 
  //   }
  // }
  
  // users = users.map(x => {
  //   x['id'] = ids[x.score];
  //   return x
  // })

  // return res.send(users)

  let result = await dbo.NilXP.find({score: {$exists: true}}).sort({score : -1}).lean().exec();
  var ids = {}
  var users = result.filter(x => x.score >= 0).sort(function(a, b) {
    if(a.score > b.score) return -1;
    else if(a.score < b.score) return 1;
    return 0;
  });
  
  let rank = 1;
  users = users.reduce((acc, user, index) => {
    user.id = rank;
    
    if(index < users.length-1) {
        if(user.score !== users[index+1].score) {
            rank++;
        }
    }
    
    acc.push(user);
    return acc;
  }, [])

  res.send(users)
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("nil-xps")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

module.exports = recordRoutes;