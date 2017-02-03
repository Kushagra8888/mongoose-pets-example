var express = require('express');
var router = express.Router();
var Pet = require('../models/pets');

/* GET home page. */
router.get('/', function(req, res, next) {
  Pet.find({}, function(err, pets) {
    if (err) {
      console.log(err)
      return;
    }
    res.render('index', {pets: pets});
  })
});

router.get('/newPet', function(req, res){

  var newPet = new Pet({
    name: req.query.name,
    type: req.query.type,
    age: req.query.age
  });

  newPet.save( function (err, pet) {
    if (err){
      console.log(err);
      return
    }
    console.log('new pet entered: ', newPet);
    res.redirect('/')
  })
});

module.exports = router;
