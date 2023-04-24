const Product = require('./Product');
const ProductInCart = require('./ProductInCart');
const User = require('./User');
const Cart = require("./Cart");

User.hasOne(Cart, {
  foreignKey: "userId",
});

Cart.belongsToMany(Product, {
  foreignKey: "cartId",
  through: ProductInCart
});

Product.belongsToMany(Cart, {
  foreignKey: "productId",
  through: ProductInCart
});

Cart.belongsTo(User, {
  foreignKey: "userId"
});

module.exports = {
  User,
  Cart,
  Product,
};
