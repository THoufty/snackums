const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    price_usd: {
      type: DataTypes.DECIMAL,
      allowNull:false,
      validate: {
	notNull: true,
	notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
	notNull: true,
	notEmpty: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
