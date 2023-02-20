'use strict'

const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library');

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

    static async googlefindOrCreate(req, res, next) {
        try {
            const { google_token } = req.headers

            const client = new OAuth2Client(process.env.G_CLIENT_ID);
            const ticket = await client.verifyIdToken({
                idToken: google_token,
                audience: process.env.G_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            });
            const payload = ticket.getPayload();


            const [user, created] = await User.findOrCreate({
                where: {
                    email: payload.email
                },
                defaults: {
                    email: payload.email,
                    password: process.env.DEFAULT_PASSWORD,
                    role: 'staff'
                },
                hooks: false
            })

            const access_token = generateToken({ id: user.id })

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