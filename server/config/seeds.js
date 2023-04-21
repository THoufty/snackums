const db = require('./connection');
const { User, Product } = require('../models');
const productseeds = require('../seeders/productseeds.json');


db.once('open', async () => {

	await User.destroy();

	await User.create({
		firstName: 'Pamela',
		lastName: 'Washington',
		email: 'pamela@testmail.com',
		password: 'password12345',
	});

	await User.create({
		firstName: 'Elijah',
		lastName: 'Holt',
		email: 'eholt@testmail.com',
		password: 'password12345'
	});

	console.log('users seeded');

	await Product.destroy({});
	await Product.bulkCreate(productseeds);

	console.log('all done!');

	process.exit(0);

});
