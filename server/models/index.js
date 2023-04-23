const Product = require('./Product');
const ProductInCart = require('./ProductInCart');
const User = require('./User');
const Cart = require("./Cart");

User.hasOne(Cart, {
  foreignKey: "user_id",
});

Cart.belongsToMany(Product, {
  foreignKey: "cart_id",
  through: ProductInCart
});

Product.belongsToMany(Cart, {
  foreignKey: "product_id",
  through: ProductInCart
});

Cart.belongsTo(User, {
  foreignKey: "user_id"
});

module.exports = {
  User,
  Cart,
  Product,
};
