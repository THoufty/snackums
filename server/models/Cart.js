const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model { }

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      },
      references: {
        model: "user",
        key: "id"
      }
    },
//    price_total_usd: {
//      type: DataTypes.DECIMAL,
//      allowNull: false,
//      validate: {
//        notNull: true,
//        notEmpty: true,
//      },
//    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart',
  }
);

module.exports = Cart;
