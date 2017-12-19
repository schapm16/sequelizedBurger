var express = require('express');
var router = express.Router();

var db = require('../models');

router.get('/', function(req, res) {
  console.log("GET");
  db.burgerSeq.findAll().then(function(data) {
    res.render('index', { burgerData: data });
  });
});

router.post('/', function(req, res) {
  console.log("POST");
  console.log("Request Body: " + req.body.newBurger);
  db.burgerSeq.create({burger_name: req.body.newBurger}).then(function(data){
    res.status(200).end();
  });
});

router.put('/', function(req, res) {
  console.log("PUT");
  db.burgerSeq.update({devoured: true}, {where: { id: parseInt(req.body.updateBurger)}}).then(function(data) {
    res.status(200).end();
  });
});


module.exports = router;
