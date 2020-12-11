var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo' });
});

router.post('/', function(req, res, next) {
  console.log(req.body.item);
  res.redirect('/');
});

router.get('/about', function(req, res, next) {
  res.render('index/about', { title: 'Todo about' });
});

module.exports = router;
