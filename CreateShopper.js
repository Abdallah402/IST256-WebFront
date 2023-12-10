var express = require('express');
var app = express();

app.get("/CreateShopper", function(req, res) {
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.username) {
        return res.send({ "status": "error", "message": "missing username" });
    } else {
        var shopper = {
            "Username": req.query.username,
            "Email": req.query.email,
            "Address": req.query.address,
            "Age": req.query.age,
            "PhoneNumber": req.query.phoneNumber
        };

        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            console.log(err);
            if (err) {
                return res.send({ "result": "failed MongoDB connection" });
            } else {
              var db = mongoClient.db("team001");
              var collection = db.collection('shopper');
              collection.insert(shopper);
              mongoClient.close();
              return res.send({"result" : "create passed"});
             }  //close if
                  }); //close function
              } //close else
          }); //Close app.get

  