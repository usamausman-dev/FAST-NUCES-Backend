const express = require('express')
const router = express.Router();
const {newsletter, user, all_users, login, signup, userByEmail, userByID, updateProfile, deleteUser } = require('../controller/users')

router.get('/', user);
router.get('/all-users', all_users);
router.get('/user-by-email', userByEmail)
router.get('/user-by-id/:id', userByID)

router.post('/login', login)
router.post('/signup', signup)

router.post('/newsletter',newsletter)

router.put('/update-profile', updateProfile)

router.delete('/delete-user', deleteUser)

module.exports = router;