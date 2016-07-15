var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', {});
  });
  app.get('/Ball', function (req, res) {
  	res.sendfile('index')
  });
  app.get('/waterfall', function (req, res) {
    res.sendfile('index')
  });
  app.get('/windmill', function (req, res) {
    res.sendfile('index')
  });
  app.get('/blink', function (req, res) {
    res.sendfile('index')
  });
};

