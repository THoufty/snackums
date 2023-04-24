const sequelize = require('./../config/connection');
const {Product, User} = require("./../models");
const productSeedData = require('./productSeed');
const userSeedData = require('./userSeed');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  User.destroy({
    where : {},
  })
  Product.destroy({
    where : {},
  });
  
  const users = await User.bulkCreate(userSeedData);
  const product = await Product.bulkCreate(productSeedData);

  process.exit(0);
}

seedDatabase();
