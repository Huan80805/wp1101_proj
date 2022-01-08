// find all member in clubs using id reference
const Club = {
    members(parent, args, { db }, info) {
      return Promise.all(
        parent.members.map(
          ({user, identity}) => {
              return {user:db.UserModel.findById(user), identity:identity}
          })
      )
      
    },
    events(parent, args, { db }, info) {
        console.log(parent.members[0])
        return Promise.all(
          parent.events.map(
            (eventId) => {
                return db.EventModel.findById(eventId)
            })
        )
        
      },
};
export default Club  