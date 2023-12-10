var express = require('express');
var app = express();

app.get("/ReadReturns", function(req, res) {
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.returnName) {
        return res.send({ "status": "error", "message": "missing return" });
    } else {
        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            if (err) {
                return res.send({ "result": "read failed" });
            } else {
                var collection = db.collection('returns');
                collection.find({ "ReturnName": req.query.returnName }).toArray(function (error, returns) {
                    db.close();
                    return res.send(returns);
                });
            }
        });
    }
});