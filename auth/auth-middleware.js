const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secret.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          message: 'sorry, no access',
        });
      } else {
        req.user = decodedToken.user;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: 'you shall not pass!',
    });
  }
};