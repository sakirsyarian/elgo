'use strict'

const { Post, Category } = require('../models')

class PostController {
    static async postFindAll(req, res, next) {
        try {
            const posts = await Post.findAll()
            res.status(200).json({
                status: 'ok',
                data: posts
            })
        } catch (error) {
            // next(error)
            res.status(500).json(error)
        }
    }

    static async postCreate(req, res, next) {
        try {
            const { title, content, imgUrl, CategoryId, AuthorId } = req.body
            const post = await Post.create({ title, content, imgUrl, CategoryId, AuthorId })

            res.status(201).json({
                status: 'created',
                data: post
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = PostController