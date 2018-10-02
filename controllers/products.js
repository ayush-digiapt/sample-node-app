var express = require('express');
var db = require('../db/db');

exports.getProducts = function (req, res) {
    console.log("entering into getProducts");
    var users;
    users = [{
        name:"refrigerator",
        price:"22000 INR"
    },
    {
        name:"iPhone X",
        age:"30000 INR"
    }]
    console.log("exiting from getProducts");
    res.status(200).send(users);
}


// create product
exports.createProduct = function(req, res) {
    
    console.log("entering into createProduct");
    
    // print inputs
    console.log("request body: ", req.body);

    var dbConnection = db.getDbConnection();
    var queryStatement = "insert into products values('"+req.body.product_id+"','"+req.body.product_Name+"',"+req.body.price+",now(),now(),"+req.body.quentity+")";

    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
		if(err) {
			console.log("error: ",err);
			res.status(500).send(err);		
		} else {
            console.log("success: ",result);
            if(result.affectedRows === 1) {
                res.status(201).send("Product has been inserted successfully");		
            }
        }
        console.log("exiting from createProduct");
    });
}
