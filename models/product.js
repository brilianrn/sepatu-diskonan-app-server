'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Product name is required!'
        }
      }
    },
    size: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Size is required!'
        },
        isNumeric: {
          args: true,
          msg: 'Invalid number size!'
        },
        min: {
          args: 1,
          msg: 'Size number must greater from 1'
        }
      }
    },
    color: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Color is required!'
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Image Url is required!'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};