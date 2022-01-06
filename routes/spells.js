var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send('you hit the spells main endpoint!');
});

module.exports = router;