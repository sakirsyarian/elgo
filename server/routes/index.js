'use strict'

const express = require('express')
const router = express.Router()

const postRoute = require('./postRoute')
const categoryRoute = require('./categoryRoute')

const UserController = require('../controllers/UserController')

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the server' })
})

router.use('/posts', postRoute)
router.use('/categories', categoryRoute)


module.exports = router