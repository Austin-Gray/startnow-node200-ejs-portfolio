var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('Portfolio root page')
});

router.get('/sd-topspots', function (req, res) {
  res.send('Topspots page')
});

router.get('/change-calculator', function (req, res) {
  res.send('Change Calculator page')
});

router.get('/slango', function (req, res) {
  res.send('Slango page')
});

router.get('/vstda', function (req, res) {
  res.send('vstda page')
});

module.exports = router