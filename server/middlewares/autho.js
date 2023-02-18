'use strict'

const { User } = require('../models')

const autho = async (req, res, next) => {
    try {
        const payload = req.user
        const user = await User.findByPk(payload.id)

        if (!user) {
            throw { name: 'AuthenticationError', message: 'You must login first' }
        }

        if (user.role !== 'admin') {
            throw { name: 'AuthorizationError', message: 'You are not authorized to access this page' }
        }

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = autho