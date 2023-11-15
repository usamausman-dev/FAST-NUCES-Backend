const express = require('express')
const router = express.Router();
const { user, all_users, login } = require('../controller/users')

router.get('/', user);
router.get('/all-users', all_users);

router.post('/login', login)

module.exports = router;