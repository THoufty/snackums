const Product = require('./Product');
const ProductInCart = require('./ProductInCart');
const User = require('./User');

User.belongsToMany(Product, {
  foreignKey: "userId",
  through: ProductInCart
});

Product.belongsToMany(User, {
  foreignKey: "productId",
  through: ProductInCart
});




module.exports = {
  User,
  ProductInCart,
  Product,
};
