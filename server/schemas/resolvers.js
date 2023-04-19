const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Cart } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
	const user = await User.findByPk(context.user.id);
	return user;
      }
      throw new AuthenticationError('Not logged in');
    },
    product: async (parent, args, context) => {
      if(context.product) {
	const product = await Product.findByPk(context.product.id)
	return user;
      }
      throw new AuthenticationError('Not logged in');
    },
    cart: async (parent, args, context) => {
      if(context.cart) {
	const cart = await Cart.findByPk(context.cart.id)
	return user;
      }
      throw new AuthenticationError('Not logged in');
    },
    
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    
    updateUser: async (parent, args, context) => {
      if (context.user) {
	return await User.update(
	  { args },
	  { where: {id: context.user.id}
	  }
	)
	  .catch()// insert Error handling
      }
	.
    },

    deleteUser: async (parent, args, context) => {
      const user = await User.destroy(
	{where: {id: context.user.id}
	}
      );
    },

    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({where: { email }});
      if (!user) {
	throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password); // what should we put here
      if (!correctPw) {
	throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    addProduct: async (parent, args, context) => {
      const product = await Product.create(args);
    },

    updateProduct: async (parent, args) => {
      const product = await Product.update(
	{args},
	{where:{id: context.product.id}
	}
      );
    },

    deleteProduct: async (parent, args, context) => {
      const product = await Product.destroy(
	{
	  where: {id: context.product.id}
	}
      }
    },

    addToCart: async (parent, args, context) => {
      const cart = await Cart.update(
	{ags},
	{where: {id: context.product.id}
	}
      );
    },

    removeFromCart: async (parent, args, context) => {
      const product = await Cart.destroy(
	{
	  where: {id: context.product.id}
	}
      );
    },
    
  }
};

module.exports = resolvers;
