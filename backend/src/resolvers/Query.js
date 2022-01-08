import { makeName } from "./utility";

const Query = {
  async user(parent, {userName,password}, { db }, info) {
    //check log in
    const user = await db.UserModel.findOne({userName:userName})
    if (!user) return {status:"USER_NOT_FOUND"}
    else if (user.password === password) return {status:"SUCCESS", userData: user}
    // TODO: add personal club information
    return {status: "INVALID_PASSWORD"}

  },
  async clubs(parent, args, { db }, info) {
    //query all clubs
    return db.ClubModel.find()
  },
  async club(parent, {name}, { db }, info) {
    //query one club
    return db.ClubModel.findOne({name:name})
  },
  async event(parent, {clubName, name}, { db }, info) {
    //query one event
    const eventName = clubName + "_" + name
    return db.EventModel.findOne({name:eventName})
  },
};

// const Query = {
//   chatBox(parent, {name1, name2}, { db }, info) {
//     if (!name1 || !name2) {
//       throw new Error('empty chatbox name')
//     }
//     const chatBoxName = makeName(name1, name2)
//     return db.ChatBoxModel.findOne({name:chatBoxName})
//   },
//   messages(parent, args, {db}, info){
//     return db.MessageModel.find()
//   },
//   async users(parent, args, { db }, info) {
//     const users = await db.UserModel.find()
//     if (!args.query) return users
//     return users.filter((user) => {
//       return user.name.toLowerCase().includes(args.query.toLowerCase());
//     });
//   },
// };

export { Query as default };
