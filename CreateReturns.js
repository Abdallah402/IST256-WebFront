var express = require('express');
var app = express();

app.get("/CreateReturns", function(req, res) {
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.returnName) {
        return res.send({ "status": "error", "message": "missing return " });
    } else {
        var returns = {
            "ReturnName": req.query.returnName,
            "ReturnEmail": req.query.returnEmail,
            "OrderNumber": req.query.orderNumber,
            "ReturnReason": req.query.returnReason,
            
        };

        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            console.log(err);
            if (err) {
                return res.send({ "result": "failed MongoDB connection" });
            } else {
                var db = mongoClient.db("team001");
                var collection = db.collection('returns');
                collection.insert(returns);
                mongoClient.close();
                return res.send({"result" : "create passed"});
            }  //close if
        }); //close function
    } //close else
}); //Close app.get
