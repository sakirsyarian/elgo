const { Category, History } = require('../models')

class CategoryController {
    static async categoryFindAll(req, res, next) {
        try {
            const categories = await Category.findAll()

            res.status(200).json({
                status: 'ok',
                data: categories
            })
        } catch (error) {
            next(error)
        }
    }

    static async historyFindAll(req, res, next) {
        try {
            const histories = await History.findAll({
                order: [['updatedAt', 'DESC']]
            })

            res.status(200).json({
                status: 'ok',
                data: histories
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CategoryController