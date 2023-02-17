const express = require('express')
const router = express.Router()

const postController = require('../controllers/postController')

router.post('/', postController.postCreate)

router.get('/', postController.postFindAll)
router.get('/:id', postController.postFindByPk)

module.exports = router