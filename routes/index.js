var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/disabled-input', function(req, res, next) {
  res.render('disabled-input', { title: 'Express' });
});

router.get('/window-event', function(req, res, next) {
  res.render('window-event', { title: 'Express' });
});

module.exports = router;
