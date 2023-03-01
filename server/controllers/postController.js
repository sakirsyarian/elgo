'use strict'

const { Post, Category, User, History } = require('../models')

class PostController {
    static async postCreate(req, res, next) {
        try {
            const { id } = req.user
            const { title, content, imgUrl, CategoryId, AuthorId } = req.body

            const user = await User.findByPk(id)
            const post = await Post.create({ title, content, imgUrl, CategoryId, AuthorId })
            await History.create({
                name: post.title,
                description: `New entity with id: ${post.id} created`,
                updatedBy: user.username
            })

            res.status(201).json({
                status: 'created',
                data: post
            })
        } catch (error) {
            next(error)
        }
    }

    static async postFindAll(req, res, next) {
        try {
            const posts = await Post.findAll({ include: [Category, User] })

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

    static async postUpdate(req, res, next) {
        try {
            const { id } = req.params
            const { title, content, imgUrl, CategoryId, AuthorId } = req.body

            const user = await User.findByPk(req.user.id)
            const post = await Post.update({ title, content, imgUrl, CategoryId, AuthorId }, { where: { id }, returning: true, plain: true })

            const dataPost = post[1].dataValues
            await History.create({
                name: dataPost.title,
                description: `Entity with id: ${dataPost.id} updated`,
                updatedBy: user.username
            })

            res.status(200).json({
                status: 'ok',
                data: post
            })
        } catch (error) {
            next(error)
        }
    }

    static async postUpdatePatch(req, res, next) {
        try {
            const { id } = req.params
            const { status } = req.body

            const user = await User.findByPk(req.user.id)
            const post = await Post.update({ status }, { where: { id }, returning: true, plain: true })

            const dataPost = post[1].dataValues
            await History.create({
                name: dataPost.title,
                description: `Entity status with id: ${dataPost.id} has been updated from Active into Inactive`,
                updatedBy: user.username
            })

            res.status(200).json({
                status: 'ok',
                data: post
            })
        } catch (error) {
            next(error)
        }
    }

    static async postDelete(req, res, next) {
        try {
            const { id } = req.params
            const post = await Post.findByPk(id)

            if (!post) {
                throw {
                    name: 'NotFound',
                    message: 'Post not found'
                }
            }

            await Post.destroy({ where: { id } })

            res.status(200).json({
                status: 'deleted',
                message: `${post.title} success to delete`
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = PostController