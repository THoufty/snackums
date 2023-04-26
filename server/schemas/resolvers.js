const { AuthenticationError } = require('apollo-server-express');
const { User, Product, ProductInCart } = require('../models');
const { signToken } = require('../utils/auth');
const { findByPk } = require('../models/ProductInCart');
const uuid = require('../utils/helpers')


const resolvers = {
  Query: {

    // FUNCTIONING
    users: async (parent, args, context) => {
      return await User.findAll();
    },

    // Functioning without authentcation
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
    cart: async (parent, { userId }, context) => {
      if(context.user) {
	let cartId = await User.findByPk(userId, { attributes: ["cartId"]});
	cartId = cartId.dataValues.cartId;
	return await ProductInCart.findAll({ where: { cartId: cartId } });
      }
      throw new AuthenticationError('Not logged in');
    },
    
    country: async (parent, { country }, context) => {
      return await Product.findAll({ where: { country: country } });
    },
    productInCart: async (parent, args, context) => {
          return await ProductInCart.findAll();
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

    //NOT FUNCITONING
    updateUser: async (parent, { userId, firstName, lastName, email, password }, context) => {
      if (context.user) {
        return await User.update(
          {
            firstName,
            lastName,
            email,
            password
          },
          {
            where: { id: userId }
          }
        )
      }
    },

    //NOT FUNCTIONING
    deleteUser: async (parent, { userId }, context) => {
      return await User.destroy(
        {
          where: { id: userId }
        }
      );
    },

    addOrderNumber: async (parent, { userId }) => {
      const cartId = User.findByPk({ id: userId }, { attributes: [cartId] })
      const userOrder = await ProductInCart.update(
        {
          orderId: uuid()
        },
        { where: { cartId: cartId } });
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

    deleteProduct: async (parent, { productId }, context) => {
      const product = await Product.destroy(
        {
          where: { id: poductId }
        }
      );
    },

    addToCart: async (parent, { cartId, productId, quantity }, context) => {
      const cart = await ProductInCart.create(
        { productId, cartId, quantity }
      ); 
      return cart;
    },

    removeFromCart: async (parent, { cartId, productId }, context) => {
      const product = await ProductInCart.destroy(
        {
          where: {
            cartId: cartId,
            productId: poductId
          }
        }
      );
    },

  }
};

module.exports = resolvers;

