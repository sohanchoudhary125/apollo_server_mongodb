const User = require("../model/User");
const Address = require("../model/Address");

const resolvers = {
  Query: {
    getAllUser: async (_, { limit, where }) => {
      const user = await User.find();

      if (where) {
        const greater = where.age_greater_than;
        const equal = where.age_equal_to;
        const lesser = where.age_lesser_than;

        if (greater) {
          let newUse = user.filter((item) => item.age > greater);
          return newUse.slice(0, limit);
        }

        if (equal) {
          let newUse = user.filter((item) => item.age == equal);
          return newUse.slice(0, limit);
        }

        if (lesser) {
          let newUse = user.filter((item) => item.age < lesser);
          return newUse.slice(0, limit);
        }
      }

      return user.slice(0, limit);
    },
    getAllAddress: async () => {
      return await Address.find();
    },
  },

  User: {
    address: async (parent) => {
      const add = await Address.find({ userid: parent.id });
      return add[0];
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const { name, age, status, street, pincode } = args.data;
      const user = new User({ name, age, status });
      await user.save();
      const address = new Address({ userid: user.id, street, pincode });
      await address.save();
      return user;
    },
  },
};

module.exports = { resolvers };
