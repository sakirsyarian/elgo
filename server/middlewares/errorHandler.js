const errorHandler = (err, req, res, next) => {
    if (err.name === 'SequelizeValidationError') {
        const errors = err.errors.map(el => el.message)
        return res.status(400).json(errors)
    }

    if (err.name === 'SequelizeUniqueConstraintError') {
        const errors = err.errors.map(el => el.message)
        return res.status(400).json(errors)
    }

    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Invalid token' })
    }

    if (err.name === 'SequelizeDatabaseError') {
        return res.status(500).json({ message: 'Internal server error' })
    }

    return res.status(500).json(err)
}

module.exports = errorHandler