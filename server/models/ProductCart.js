const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class productCart extends Model { }

productCart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
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
    cart_id: {
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'productCart',
  }
);

module.exports = productCart;
