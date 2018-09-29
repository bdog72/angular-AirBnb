const User = require('../models/user');

exports.auth = function(req, res) {};

exports.register = function(req, res) {
  const { username, email, password, passwordConfirmation } = req.body;

  if (!username || !email) {
    return res.status(422).send({
      errors: [{ title: 'Data Missing!', detail: 'Provide email and password' }]
    });
  }

  if (password !== passwordConfirmation) {
    return res.status(422).send({
      errors: [{ title: 'Invalid Password!', detail: 'Passwords dont match' }]
    });
  }

  User.findOne({ email }, function(err, existingUser) {
    if (err) {
      return res.status(422).send({
        mongoose: 'handle mongoose errors'
      });
    }

    if (existingUser) {
      return res.status(422).send({
        errors: [
          {
            title: 'Invalid email!',
            detail: 'User with this email already exists'
          }
        ]
      });
    }

    const user = new User({
      username,
      email,
      password
    });

    user.save(function(err) {
      if (err) {
        return res.status(422).send({
          mongoose: 'handle mongoose errors'
        });
      }
      return res.json({ registered: true });
    });
  });

  // res.json({ username, email });
};
