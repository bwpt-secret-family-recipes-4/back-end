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

server.use('/api/recipes', recipeRouter);
server.use('/api/auth', authRouter);

// Custom middleware Logger
function logger(req, res, next) {
  console.log(`
  {
      method: ${request.method},
      url: ${request.url},
      timestamp: ${new Date().toLocaleString()}
  }
  `);
  next();
}

module.exports = server;
