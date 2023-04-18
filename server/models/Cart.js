const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Cart extends Model { }

Cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        priceTotalUSD: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
            },
        },
        product_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'cart',
    }
);

module.exports = Cart;
