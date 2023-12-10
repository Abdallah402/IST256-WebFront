var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

app.get("/ReadShoppingCart", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.productName) {
        return res.send({ "status": "error", "message": "missing product name" });
    } else {
        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            if (err) {
                return res.send({ "result": "read failed" });
            } else {
                var collection = db.collection('shopping cart');
                collection.find({ "Product Name": req.query.productName }).toArray(function (error, shoppingCart) {
                    db.close();
                    return res.send(shoppingCart);
                });
            }
        });
    }
});
