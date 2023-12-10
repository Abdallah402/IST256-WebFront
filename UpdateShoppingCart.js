var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

app.get("/Update", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.productName) {
        return res.send({ "status": "error", "message": "missing product" });
    } else {
        var shoppingCart = {
            "Product Name": req.body.productName,
            "Price": req.body.price,
            "Quantity": req.body.quantity,
            "Total": req.body.total,
            "Action": req.body.action,
        };

        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            if (err) {
                return res.send({ "result": "update failed" });
            } else {
                var collection = db.collection('shopping cart');
                collection.update({ "Product Name": req.query.productName }, shoppingCart);
                db.close();
                return res.send({ "result": "update passed" });
            }
        });
    }
});
