var express = require('express');
var app = express();

app.get("/ReadProducts", function(req, res) {
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.productName) {
        return res.send({ "status": "error", "message": "missing ProductName" });
    } else {
        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            if (err) {
                return res.send({ "result": "read failed" });
            } else {
                var collection = db.collection('products');
                collection.find({ "ProductName": req.query.productName }).toArray(function (error, products) {
                    db.close();
                    return res.send(products);
                });
            }
        });
    }
});

