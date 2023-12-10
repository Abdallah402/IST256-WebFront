var express = require('express');
var app = express();

app.get("/Update", function(req, res) {
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
            if (err) {
                return res.send({ "result": "update failed" });
            } else {
                var collection = db.collection('shoppers');
                collection.update({ "Username": req.query.username }, shopper);
                db.close();
                return res.send({ "result": "update passed" });
            }
        });
    }
});
