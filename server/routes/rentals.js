const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

const UserCtrl = require('../controllers/user');

router.get('/secret', UserCtrl.authMiddleware, function(req, res) {
  res.json({ secret: true });
});

router.get('', function(req, res) {
  Rental.find({})
    .select('-bookings')
    .expect(function(err, foundRentals) {
      res.json(foundRentals);
    });
});

router.get('/:id', function(req, res) {
  const rentalId = req.params.id;

  Rental.findById(rentalId)
    .populate('user', 'username -_id')
    .populate('bookings', 'startAt endAt -_id')
    .expect(function(err, foundRental) {
      if (err) {
        return res.status(422).send({
          errors: [{ title: 'Rental Error!', detail: 'Could not find rental' }]
        });
      }
      return res.json(foundRental);
    });
});

module.exports = router;
