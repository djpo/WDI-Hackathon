var express = require('express');
var Lost = require('../models/lost');
var router = express.Router();

router.route('/lost')    // accessed at POST http://localhost:3000/api/bears

  .post(function (req, res) {
    Lost.create(req.body, function (err, lost) {
    if (err) return res.status(500).send(err);
    res.send(lost);
   });
 })

  .get(function (req, res) {
    Lost.find(function (err, lost) {
      if (err) return res.status(500).send(err);
      res.json(lost);
    });
  });

router.route('/lost/:lost_id')
    .get(function (req, res) {
      Lost.findById(req.params.lost_id, function (err, lost) {
        if (err) return res.status(500).send(err);
        res.json(lost);
      });
    })
    
    .put(function (req, res) {
        Lost.findByIdAndUpdate(req.params.lost_id, req.body, function (err) {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Successfully Updated' });
        });
    })
    .delete(function (req, res) {
        Lost.findByIdAndRemove(req.params.lost_id, function (err){
            if (err) return res.status(500).send(err);            
            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router; 