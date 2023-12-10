var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

app.get("/Delete", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.username) {
        return res.send({ "status": "error", "message": "missing product name" });
    } else {
        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            console.log(err);
            if (err) {
                return res.send({ "result": "remove failed" });
            } else {
                var collection = db.collection('shoppingCart');
                collection.remove({ "Product Name": req.query.productName });
                db.close();
                return res.send({ "result": "remove passed" });
            }
        });
    }
});