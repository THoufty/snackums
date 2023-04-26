const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const uuid = require('../utils/helpers')

class ProductInCart extends Model { }

ProductInCart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      },
      references: {
        model: "product",
        key: "id"
      }
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
      references: {
        model: "user",
        key: "cartId"
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'productInCart',
  }
);

module.exports = ProductInCart;
