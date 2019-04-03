  var router = require('express').Router();
  const visitors = require('../controllers/visitorController');

  //Create a new visitor
  router.post('/api/visitors', visitors.create);
  module.exports = router;

  //Retrieve all visitors
  router.get('/api/visitors', visitors.findAll);

  //Delete visitor
  router.delete('/api/visitors', visitors.delete);
