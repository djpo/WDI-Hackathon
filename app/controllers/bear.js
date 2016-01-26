var express = require('express');
var Bear = require('../models/bear');
var router = express.Router();

router.route('/bears')    // accessed at POST http://localhost:3000/api/bears
    .post(function (req, res) {        
        var bear = new Bear();     
        bear.name = req.body.name; 
        bear.save(function (err) {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Bear created!' });
        });        
    })
    .get(function (req, res) {
        Bear.find(function (err, bears) {
            if (err) return res.status(500).send(err);
            res.json(bears);
        });
    });

router.route('/bears/:bear_id')
    .get(function (req, res) {
        Bear.findById(req.params.bear_id, function (err, bear) {
            if (err) return res.status(500).send(err);
            res.json(bear);
        });
    })
    .put(function (req, res) {
        Bear.findByIdAndUpdate(req.params.bear_id, req.body, function (err) {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Successfully Updated' });
        });
    })
    .delete(function (req, res) {
        Bear.findByIdAndRemove(req.params.bear_id, function (err){
            if (err) return res.status(500).send(err);            
            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router; 