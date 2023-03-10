'use strict'

const express = require('express')
const router = express.Router()

const postRoute = require('./postRoute')
const categoryRoute = require('./categoryRoute')
const userRoutes = require('./userRoute')
const auth = require('../middlewares/auth')
const autho = require('../middlewares/autho')

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the server' })
})

router.use(userRoutes)

router.use(auth) // authentication
// router.use(autho) // authorization

router.use('/posts', postRoute)
router.use('/', categoryRoute)

module.exports = router