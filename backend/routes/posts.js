const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('Get all posts');
});

module.exports = router;
