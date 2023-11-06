var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
res.render('chikoo', {n1:'chikoo2',n2: 'saubhagya'})
});

module.exports = router;
