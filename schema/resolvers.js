const { Userlist } = require("./fakeData");
const _ = require("lodash")

const resolvers = {
  Query: {
    users:() => {
      return Userlist;
    },
    user: (parent,args) => {
      const id = args.id;
      const user = _.find(Userlist, {id: Number(id)});
      return user
    }
  },
};

module.exports = { resolvers };
