const { users } = require("../mock-data/data");

const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
  },

  Mutation: {
    createUser(parent, args) {
      const newUser = args;
      users.push(newUser);
      return newUser;
    },
  },
};

module.exports = { resolvers };
