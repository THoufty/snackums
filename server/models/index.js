// import models
const Product = require('./Product');
const User = require('./User');
const Cart = require("./Cart");

Cart.hasMany(Product, {
  foreignKey: "product_id",
});

Product.belongsToMany(Cart, {
  foreignKey: "product_id"
});

Cart.belongsTo(User, {
  foreignKey: "user_id"
});

User.hasOne(Cart, {
  foreign: "user_id",
});
  



module.exports = {
  Product,
  Category,
  Cart,
};
