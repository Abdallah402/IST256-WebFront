var express = require('express');
var app = express();

app.get("/Delete", function(req, res) {
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");

    if (!req.query.username) {
        return res.send({ "status": "error", "message": "missing username" });
    } else {
        var url = 'mongodb://localhost:27017';
        MongoClient.connect(url, function (err, db) {
            console.log(err);
            if (err) {
                return res.send({ "result": "remove failed" });
            } else {
                var collection = db.collection('shoppers');
                collection.remove({ "Username": req.query.username });
                db.close();
                return res.send({ "result": "remove passed" });
            }
        });
    }
});
