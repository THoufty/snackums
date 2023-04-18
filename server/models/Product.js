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
    itemName: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
	priceUSD: {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
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
