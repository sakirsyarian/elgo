const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/categoryController')

router.get('/categories', categoryController.categoryFindAll)
router.get('/histories', categoryController.historyFindAll)

module.exports = router