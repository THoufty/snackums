const { AuthenticationError } = require('apollo-server-express');
const { User, Product, ProductInCart } = require('../models');
const { signToken } = require('../utils/auth');
const { findByPk } = require('../models/ProductInCart');
const uuid = require('../utils/helpers')

const extractPoductInfo = (productObject) => {
  let info = {
    productId: productObject.id,
    itemName: productObject.itemName,
    priceUsd: productObject.priceUsd,
    quantity: productObject.prodcutInCart.dataValues.productInCart.dataValues.quantity
  }

};


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({id: context.user.id})
      }
      throw new AuthenticationError('Not logged in');
    },

    // FUNCTIONING
    users: async (parent, args, context) => {
      return await User.findAll();
    },

    // FUNCTIONING 
    user: async (parent, { email }, context) => {
      if (context.user) {
	return await User.findOne({ where: { email } });
      }
      throw new AuthenticationError('Not logged in');
    },

    // FUNCTIONING
    products: async (parent, args, context) => {
      return await Product.findAll();
    },

    // FUNCTIONING
    product: async (parent, { id }, context) => {
      if(context.product) {
      return await Product.findByPk(id);
      }
      throw new AuthenticationError('Not logged in');
    },

    // FUNCTIONING
    cart: async (parent, args, context) => {
      if(context.user) {
	return await ProductInCart.findAll({ where: { userId: context.user.id } });
      }
      throw new AuthenticationError('Not logged in');
    },

    // FUNCTIONING
    country: async (parent, { country }, context) => {
      return await Product.findAll({ where: { country: country } });
    },

    // FUNCTIONING
    productsInTheCart: async (parent, args, context) => {
      let users =  await User.findOne(
	{
	  where: {id: context.user.id},
	  include: Product
	});
      let productsInTheCart = users.dataValues.products;
      productsInTheCart = productsInTheCart.map((currentItem) => {
	return {
	  productId: currentItem.id,
	  itemName: currentItem.itemName,
	  priceUsd: currentItem.priceUsd,
	  quantity: currentItem.dataValues.productInCart.dataValues.quantity
	}
      });
      return productsInTheCart;
    },
    
  },
    
  Mutation: {

    // FUNCTIONING
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create(
        {
          firstName,
          lastName,
          email,
          password
        });
      const token = signToken(user);
      return { token, user };
    },

    // FUNCITONING
    updateUser: async (parent, { userId, firstName, lastName, email, password }, context) => {
      if (context.user) {
	let [rowsAffected ,userUpdate] = await User.update(
	  //	console.log(await User.update(
          {
            firstName,
            lastName,
            email,
            password
          },
          {
            returning: true,
	    where: { id: context.user.id }
          }
	);
      }
      throw new AuthenticationError('Not logged in');
      return rowsAffected;;
    },
    
    // FUNCTIONING BUT NOT RETURNING ANYTING
    deleteUser: async (parent, { userId }, context) => {
      return await User.destroy(
        {
          where: { id: userId },
        }
      );
    },

    // NEED TO TEST
    addOrderNumber: async (parent, { userId }) => {
      const userOrder = await ProductInCart.update(
        {
          orderId: uuid()
        },
        { where: { userId: userId } });
      return { userOrder };
    },

    // FUNCTIONING
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new AuthenticationError("There is no user of that email");
      }
      const correctPw = await user.checkPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Password is incorecct");
      }
      const token = signToken(user);
      return { token, user };
    },

    // FUNCTIONING
    addProduct: async (parent, { itemName, priceUsd, country, image, description }, context) => {
      return await Product.create(
        {
          itemName,
          priceUsd,
          country,
          image,
          description
        });
    },

    // NEED TO TEST look at updateUSer
    updateProduct: async (parent, { productId, itemName, priceUsd, country, image, description }, context) => {
      return await Product.update(
        {
          itemName,
          priceUsd,
          country,
          image,
          description
        },
        {
          where: { id: productId }
        }
      );
    },

    // FUNCTIONNING BUT NOT GETTING OUTPUT
    deleteProduct: async (parent, { productId }, context) => {
      return await Product.destroy(
        {
          where: { id: productId }
        }
      );
    },

    // FUNCTIONING
    addToCart: async (parent, { productId, quantity }, context) => {
      console.log(context.user.id)
      const cart = await ProductInCart.create(
        { productId, userId: context.user.id, quantity }
      ); 
      return cart;
    },

    // NEED TO TEST
    removeFromCart: async (parent, { productId }, context) => {
      const product = await ProductInCart.destroy(
        {
          where: {
            userId: context.user.id,
            productId: productId
          }
        }
      );
    },

  }
};

module.exports = resolvers;

