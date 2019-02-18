var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landlording', { title: 'Landlording' });
});

module.exports = router;
