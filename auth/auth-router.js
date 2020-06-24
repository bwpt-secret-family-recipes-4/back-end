const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/dbconfig');
const secrets = require('../config/secret');
const Users = require('../users/users-model');

// Used to test List of Users
// router.get('/', (req, res) => {
//   Users.find()
//     .then((users) => {
//       res.json(users);
//     })
//     .catch((error) => {
//       res.send(error);
//     });
// });

// POST register
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then((newUser) => {
      const token = signToken(newUser);
      res.status(201).json({
        created_user: newUser,
        id: newUser.id,
        token: token,
        message: 'Successfully created a new user',
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// POST login
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);

        res.status(200).json({
          username: user.username,
          id: 'user.id',
          token: token,
          message: 'Logged in',
        });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

function signToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
