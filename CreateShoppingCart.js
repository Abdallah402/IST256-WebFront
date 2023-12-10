var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

app.get("/CreateShoppingCart", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.username) {
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
                return res.send({ "result": "failed MongoDB connection" });
            } else {
                var db = mongoClient.db("team001");
                var collection = db.collection('shopping cart');
                collection.insert(shopping cart);
                mongoClient.close();
                return res.send({"result" : "create passed"});
            } 
        });
    } 
});
