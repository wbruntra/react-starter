var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const { visits } = req.session;
  if (!visits) {
    req.session.visits = 1;
  } else {
    req.session.visits = visits + 1;
  }
  res.send({ status: 'Online', visit: req.session.visits });
});

module.exports = router;
