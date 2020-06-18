const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secret.js');
const Users = require('../users/users-model.js');

router.get('/', (req, res) => {
  res.send('Hello from auth router!');
});

// Register
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Login
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);

        res.status(200).json({
          message: { token },
        });
      } else {
        res.status(401).json({
          message: 'you shall not pass',
        });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

function signToken(user) {
  const payload = {
    user,
  };

  const options = {
    expiresIn: '1hr',
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
