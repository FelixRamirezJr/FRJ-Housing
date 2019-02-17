var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('possible_investment', { title: 'Possible Investment' });
});

module.exports = router;
