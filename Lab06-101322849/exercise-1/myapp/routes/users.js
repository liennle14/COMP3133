const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// GET route for listing users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST route handler
router.post('/', bodyParser.urlencoded({ extended: true }), function(req, res, next) {
  console.log(`First Name: ${req.body.firstName}`);
  console.log(`Last Name: ${req.body.lastName}`);
  res.status(200).send('POST received!');
});

module.exports = router;

module.exports = router;
