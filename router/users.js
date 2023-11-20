const express = require('express')
const router = express.Router();
const { user, all_users, login, signup, userByEmail,userByID } = require('../controller/users')

router.get('/', user);
router.get('/all-users', all_users);
router.get('/user-by-email', userByEmail)
router.get('/user-by-id/:id',userByID)

router.post('/login', login)
router.post('/signup', signup)

module.exports = router;