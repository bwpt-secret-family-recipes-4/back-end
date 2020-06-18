const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Hello from auth router!');
});

module.exports = router;
