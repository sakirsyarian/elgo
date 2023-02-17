'use strict'

const { Post, Category } = require('../models')

class PostController {
    static async postCreate(req, res, next) {
        try {
            const { title, content, imgUrl, CategoryId, AuthorId } = req.body
            const post = await Post.create({ title, content, imgUrl, CategoryId, AuthorId })

            res.status(201).json({
                status: 'created',
                data: post
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async postFindAll(req, res, next) {
        try {
            const posts = await Post.findAll()

            res.status(200).json({
                status: 'ok',
                data: posts
            })
        } catch (error) {
            next(error)
        }
    }

    static async postFindByPk(req, res, next) {
        try {
            const { id } = req.params
            const post = await Post.findByPk(id)

            if (!post) {
                throw {
                    name: 'NotFound',
                    message: 'Post not found'
                }
            }

            res.status(200).json({
                status: 'ok',
                data: post
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = PostController