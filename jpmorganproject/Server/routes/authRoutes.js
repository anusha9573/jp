const express = require('express');
const router = express.Router();
const { register } = require('../Controllers/authController');

router.post('/register', register);
// router.post('/login', login);
// router.post('/logout', logout);

module.exports = router;
