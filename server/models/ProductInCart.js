const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
        model: "cart",
        key: "id"
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
