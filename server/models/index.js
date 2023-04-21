const Product = require('./Product');
const ProductCart = require('./ProductCart');
const User = require('./User');
const Cart = require("./Cart");

User.hasOne(Cart, {
  foreignKey: "user_id",
});

Cart.belongsToMany(Product, {
  foreignKey: "cart_id",
  through: ProductCart
});

Product.belongsToMany(Cart, {
  foreignKey: "product_id",
  through: ProductCart
});

Cart.belongsTo(User, {
  foreignKey: "user_id"
});

module.exports = {
  User,
  Cart,
  Product,
};
