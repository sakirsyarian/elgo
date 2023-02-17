'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Category)
      Post.belongsTo(models.User, { foreignKey: 'AuthorId' })
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Post title cannot be empty'
        },
        notNull: {
          msg: 'Post title cannot be null'
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Post content cannot be empty'
        },
        notNull: {
          msg: 'Post content cannot be null'
        }
      }
    },
    imgUrl: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    AuthorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};