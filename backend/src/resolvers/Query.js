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

export { Query as default };
