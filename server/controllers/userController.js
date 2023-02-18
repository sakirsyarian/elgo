'use strict'

const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static async userCreate(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.create({ email, password, role: 'admin' })

            res.status(201).json({
                status: 'created',
                data: {
                    id: user.id,
                    email: user.email
                }
            })
        } catch (error) {
            next(error)
        }
    }

    static async userfindOne(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })

            if (!user) {
                throw { name: 'AuthenticationError', message: 'Invalid email/password' }
            }

            const access_token = generateToken({ id: user.id })
            const isValid = comparePassword(password, user.password)
            if (!isValid) {
                throw { name: 'AuthenticationError', message: 'Invalid email/password' }
            }

            res.status(200).json({
                status: 'ok',
                access_token,
                data: {
                    id: user.id,
                    email: user.email,
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController