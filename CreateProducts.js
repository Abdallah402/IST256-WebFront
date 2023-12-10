var express = require('express');
var app = express();

app.get("/CreateProducts", function(req, res) {
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.username) {
        return res.send({ "status": "error", "message": "missing product" });
    } else {
        var products = {
            "ProductName": req.query.productName,
            "ProductID": req.query.productID,
            "ProductDesc": req.query.productDesc,
            "ProductPrice": req.query.productPrice,
            "ProductWeight": req.query.productWeight,
            "ProductCategory": req.query.productWeight
        };

        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            console.log(err);
            if (err) {
                return res.send({ "result": "failed MongoDB connection" });
            } else {
                var db = mongoClient.db("team001");
                var collection = db.collection('products');
                collection.insert(product);
                mongoClient.close();
                return res.send({"result" : "create passed"});
            }  //close if
        }); //close function
    } //close else
}); //Close app.get
