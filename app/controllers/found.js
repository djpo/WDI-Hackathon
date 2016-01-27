var express = require('express');
var Found = require('../models/found');
var router = express.Router();

router.route('/')

  .post(function (req, res) {
    Found.create(req.body, function (err, found) {
    if (err) return res.status(500).send(err);
    res.send(found);
   });
 })
  .get(function (req, res) {
    Found.find(function (err, found) {
      if (err) return res.status(500).send(err);
      res.json(found);
    });
  });

router.route('/:found_id')
  .get(function (req, res) {
    Found.findById(req.params.found_id, function (err, found) {
      if (err) return res.status(500).send(err);
      res.json(found);
    });
  })
  .put(function (req, res) {
    Found.findByIdAndUpdate(req.params.found_id, req.body, function (err) {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Successfully Updated' });
    });
  })
  .delete(function (req, res) {
    Found.findByIdAndRemove(req.params.found_id, function (err){
      if (err) return res.status(500).send(err);            
      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router; 