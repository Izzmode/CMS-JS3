const router = require('express').Router();
const { addUser, login, addAdmin } = require('../models/userModel');

// Create
// router.post('/add', addUser);
router.post('/login', login);

// router.post('/newadmin', addAdmin )

module.exports = router;
