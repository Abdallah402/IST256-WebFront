var express = require('express');
var app = express();

app.get("/UpdateReturns", function(req, res) {
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.returnName) {
        return res.send({ "status": "error", "message": "missing return" });
    } else {
        var returns = {
            "ReturnName": req.query.returnName,
            "ReturnEmail": req.query.returnEmail,
            "OrderNumber": req.query.orderNumber,
            "ReturnReason": req.query.returnReason,
            
        };

        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            if (err) {
                return res.send({ "result": "update failed" });
            } else {
                var collection = db.collection('returns');
                collection.update({ "ReturnName": req.query.returns }, returns);
                db.close();
                return res.send({ "result": "update passed" });
            }
        });
    }
});