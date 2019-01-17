var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // check the variable our app.use set to find out
  // if this person is a valid user
  res.render('index', { title: 'Express' });
});

router.get('/jr', function(req, res, next) {
  res.render('iphone', { title: 'Express' });
});

module.exports = router;
