'use strict';

// GLOBALS
var express = require('express');

var app = express();

var router = express.Router();

var port = process.env.PORT || 80;

// MIDDLEWARE
router.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

// ROUTES
// index
router.get('/', function (req, res) {
  res.sendFile('./index.html', { root: __dirname }, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded index');
    }
  });
});

router.get('/bundle.js', function (req, res) {
  res.sendFile('./bundle.js', { root: __dirname }, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded bundle.js');
    }
  });
});

// USER ROUTER
app.use('/', router);

// START THE SERVER
app.listen(port);
console.log('listening on port ' + port);