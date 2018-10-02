var express = require('express');

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

    res.status(201).send("product has been created successfully");

    console.log("exiting from createProduct");
}
