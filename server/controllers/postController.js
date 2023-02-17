'use strict'

const { Post } = require('../models')

class PostController {
    static async postCreate(req, res, next) {
        try {
            const { title, content, imgUrl, CategoryId, AuthorId } = req.body
            console.log(req.body);

            const post = await Post.create({ title, content, imgUrl, CategoryId, AuthorId })
            console.log("🚀 ~ file: postController.js:12 ~ PostController ~ postCreate ~ post", post)

            res.status(201).json({
                status: 'created',
                data: post
            })
        } catch (error) {
            // next(error)
            res.status(500).json(error)
        }
    }
}

module.exports = PostController