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


  for (let i=0; i<userSeedData.length; i++) {
    let users = await User.create(userSeedData[i]);
    console.log(userSeedData[i]);
  }
  const product = await Product.bulkCreate(productSeedData);

  process.exit(0);
}

seedDatabase();
