const express = require('express')
const router = express.Router()

const postController = require('../controllers/postController')

router.get('/', postController.postFindAll)
router.post('/', postController.postCreate)

module.exports = router