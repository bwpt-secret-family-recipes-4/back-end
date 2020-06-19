const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const recipeRouter = require('../recipe/recipe-router.js');
const authRouter = require('../auth/auth-router.js');
const authenticate = require('../auth/auth-middleware.js');

const server = express();

server.use(logger);
server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`Server running for BW project!`);
});

server.use('/api/recipes', authenticate, logger, recipeRouter);
server.use('/api/auth', logger, authRouter);

//custom middleware
function logger(req, res, next) {
  console.log(`
  {
      method: ${req.method},
      url: ${req.url},
      timestamp: ${new Date().toLocaleString()}
  }
  `);
  next();
}

module.exports = server;
