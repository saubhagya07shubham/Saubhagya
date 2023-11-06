var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
res.render('data', {n1:'sumit',n2: 'saubhagya'})
});

module.exports = router;
