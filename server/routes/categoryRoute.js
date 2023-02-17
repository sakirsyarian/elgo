const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.categoryFindAll)

module.exports = router