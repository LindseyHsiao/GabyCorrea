const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-v -password');
        },
        user: async (parent, { })
    }
};

module.exports = resolvers;