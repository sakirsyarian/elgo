const express = require('express')
const router = express.Router()

const postController = require('../controllers/postController')
const autho = require('../middlewares/autho')

router.post('/', postController.postCreate)

router.get('/', postController.postFindAll)
router.get('/:id', postController.postFindByPk)

router.put('/:id', postController.postUpdate)
router.patch('/:id', autho, postController.postUpdatePatch)

router.delete('/:id', autho, postController.postDelete)

module.exports = router