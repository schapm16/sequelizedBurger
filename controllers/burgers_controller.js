var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
  console.log("GET");
  burger.viewAll(function(data) {
  res.render('index', {burgerData: data});  
  console.log(data);
  });  
});


router.post('/', function(req, res) {
  console.log("POST");
  console.log("Request Body: " + req.body.newBurger);
  burger.new(req.body.newBurger, function(data) {
    res.status(200).end();
    console.log(data);
  });
});

router.put('/', function(req, res) {
  console.log("PUT");
  burger.devour(parseInt(req.body.updateBurger), function(data) {
    res.status(200).end();
    console.log(data);
  });
});

module.exports = router;
