const errorHandler = (err, req, res, next) => {
    let statusCode = (status, message) => {
        return res.status(status).json(message)
    }

    if (err.name === 'SequelizeValidationError') {
        const errors = err.errors.map(el => el.message)
        return statusCode(400, { message: errors })
    }

    if (err.name === 'SequelizeUniqueConstraintError') {
        const errors = err.errors.map(el => el.message)
        return statusCode(400, { message: errors })
    }

    if (err.name === 'JsonWebTokenError') {
        return statusCode(401, { message: 'Invalid token' })
    }

    if (err.name === 'TokenExpiredError') {
        return statusCode(401, { message: 'Invalid token' })
    }

    if (err.name === 'AuthenticationError') {
        return statusCode(401, { message: err.message })
    }

    if (err.name === 'NotFound') {
        return statusCode(404, { message: err.message })
    }

    if (err.name === 'SequelizeForeignKeyConstraintError') {
        return statusCode(500, { message: 'Internal server error' })
    }

    if (err.name === 'SequelizeDatabaseError') {
        return statusCode(500, { message: 'Internal server error' })
    }

    return statusCode(500, { message: 'Internal server error' })
}

module.exports = errorHandler