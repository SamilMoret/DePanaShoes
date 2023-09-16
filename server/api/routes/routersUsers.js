const express = require('express')
const usersControllers = require('../controllers/UserControllers');

const router = express.Router();


router.get('/users', usersControllers.getAllUsers)
router.get('/users/:id', usersControllers.getUser)
router.post('/users', usersControllers.createUser)
router.put('/users/:id', usersControllers.updateUser)

module.exports = router;