var express = require('express');

exports.getProducts = function getProducts(req, res) {
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