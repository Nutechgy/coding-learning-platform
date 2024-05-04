// routes/secureRoute.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/secure', authMiddleware, (req, res) => {
  res.json({ message: 'This is a secure route' });
});

module.exports = router;
