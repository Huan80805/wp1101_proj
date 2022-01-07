// find all member in clubs using id reference
const Club = {
    member(parent, args, { db }, info) {
      return Promise.all(
        parent.member.map(
          ({user, identity}) => {
              return {user:db.UserModel.findById(user), identity:identity}
          })
      )
      
    },
};
export default Club  