var express = require('express');
var app = express();

app.get("/ReadShopper", function(req, res) {
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.username) {
        return res.send({ "status": "error", "message": "missing username" });
    } else {
        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            if (err) {
                return res.send({ "result": "read failed" });
            } else {
                var collection = db.collection('shoppers');
                collection.find({ "Username": req.query.username }).toArray(function (error, shoppers) {
                    db.close();
                    return res.send(shoppers);
                });
            }
        });
    }
});

