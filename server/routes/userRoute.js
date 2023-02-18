const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.post('/register', UserController.userCreate)

router.post('/login', UserController.userfindOne)

module.exports = router