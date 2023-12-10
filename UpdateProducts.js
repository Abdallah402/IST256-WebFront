var express = require('express');
var app = express();

app.get("/Update", function(req, res) {
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.productName) {
        return res.send({ "status": "error", "message": "missing ProductName" });
    } else {
        var product = {
            "ProductName": req.query.productName,
            "ProductID": req.query.productID,
            "ProductDesc": req.query.productDesc,
            "ProductPrice": req.query.productPrice,
            "ProductWeight": req.query.productWeight,
            "ProductCategory": req.query.productWeight
        };

        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            if (err) {
                return res.send({ "result": "update failed" });
            } else {
                var collection = db.collection('products');
                collection.update({ "ProductName": req.query.productName }, products);
                db.close();
                return res.send({ "result": "update passed" });
            }
        });
    }
});
