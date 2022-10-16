var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello, this is API for practice/side projects")
});

module.exports = router;
