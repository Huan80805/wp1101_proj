const Mutation = {
  async createUser(parent, {userName, password, nickname, email,}, {db, pubsub}, info){
    const checkUser = await db.UserModel.findOne({userName:userName})
    const checkEmail = await db.UserModel.findOne({email:email})
    if (checkUser) return {status:"USER_ALREADY_EXISTED"}
    else if (checkEmail) return {status: "EMAIL_ALREADY_EXISTED"}
    const newUser =  new db.UserModel({
      userName:userName,
      password:password,
      nickname:nickname,
      email:email,
      clubs:[]
    });
    await newUser.save()
    console.log("user created: ",userName)
    return {status: "SUCCESS", userData: newUser}
  },
  async createClub(parent, {name, host, invitation, introduction, time}, {db, pubsub}, info){
    const checkClub = await db.ClubModel.findOne({name:name})
    if (checkClub) return {status:"CLUB_ALREADY_EXISTED"}
    const initialUser = await db.UserModel.findOne({userName:host})
    if (!initialUser) return {status:"HOST_NOT_FOUND"}
    const newClub = new db.ClubModel({
      name:name,
      host:host,
      introduction:introduction,
      invitation:invitation,
      time:time,
      members:[{user:initialUser,identity:true}],
      events:[]
    })
    initialUser.clubs.push(name)
    await newClub.save()
    await initialUser.save()
    console.log("club created: ",name)
    console.log("clubData:",newClub)
    return {status: "SUCCESS", clubData: newClub}
  },

  async joinClub(parent, {name, userName, invitation}, {db, pubsub}, info){
    const checkClub = await db.ClubModel.findOne({name:name})
    if (!checkClub) return {status:"CLUB_NOT_FOUND"}
    const checkUser = await db.UserModel.findOne({userName:userName})
    if (!checkUser) return {status:"USER_NOT_FOUND"}
    if (checkClub.members.includes(checkUser.id)) return {status:"MEMBER_ALREADY_EXISTED"}
    // check invitation
    if (checkClub.invitation === invitation){
      checkClub.members.push({user:checkUser,identity:false})
      checkUser.clubs.push(name)
    }
    await checkClub.save()
    await checkUser.save()
    return {status: "SUCCESS", clubData: checkClub}
  },
  async createEvent(parent, {name, clubName, time, location, introduction, host, active}, {db, pubsub}, info){
    const eventName = clubName + "_" + name
    const checkEvent = await db.EventModel.findOne({name:eventName})
    if (checkEvent) return {status:"EVENT_ALREADY_EXISTED"}
    const initialUser = await db.UserModel.findOne({userName:host})
    if (!initialUser) return {status:"HOST_NOT_FOUND"}
    const checkClub = await db.ClubModel.findOne({name:clubName})
    if (!checkClub) return {status:"CLUB_NOT_FOUND"}
    const newEvent =  new db.EventModel({
      name:eventName,
      time:time,
      location:location,
      introduction:introduction,
      host:host,
      active:active,
      members:[{user:initialUser,identity:true}]
    });
    checkClub.events.push(newEvent)
    await newEvent.save()
    await checkClub.save()
    console.log("event created: ",name)
    return {status: "SUCCESS", eventData: newEvent}
  },

  async joinEvent(parent, {name, userName, clubName}, {db, pubsub}, info){
    const eventName = clubName + "_" + name
    const checkClub = await db.ClubModel.findOne({name:clubName})
    if (!checkClub) return {status:"CLUB_NOT_FOUND"}
    const checkUser = await db.UserModel.findOne({userName:userName})
    if (!checkUser) return {status:"USER_NOT_FOUND"}
    const checkEvent = await db.EventModel.findOne({name:eventName})
    if (!checkEvent) return {status:"EVENT_NOT_FOUND"}
    if (checkEvent.members.includes(checkUser.id)) return {status:"MEMBER_ALREADY_EXISTED"}
    checkEvent.members.push({user:checkUser,identity:false})
    await checkEvent.save()
    return {status: "SUCCESS", eventData: checkEvent}
  }
  
}

export { Mutation as default };



// import { checkUser, newUser, makeName, checkChatBox, newChatBox, checkMessage, newMessage } from "./utility";
// const Mutation = {
//   async createMessage(parent, {from, to, message}, {db, pubsub}, info){
//     const {chatBox, sender} = await checkMessage(
//       db,
//       from,
//       to,
//       message,
//       "createMessage"
//     )
//     if (!chatBox) throw new Error("ChatBox not found for create Message")
//     if (!sender) throw new Error("User not found:" + from)
//     const chatBoxName = makeName(from, to)
//     const newMsg = await newMessage(db, sender, message)
//     chatBox.messages.push(newMsg)
//     await chatBox.save()
//     pubsub.publish(`message ${chatBoxName}`,{
//       message: {mutation:"CREATED", data:newMsg}
//     })
//     return newMsg
//   },
//   async createChatBox(parent, {name1,name2}, {db,pubsub}, info) {
//     if (!name1 || !name2)
//     throw new Error("Missing chatBox name for CreateChatBox");
//     if (!(await checkUser(db, name1, "createChatBox"))) {
//       console.log("User does not exist for CreateChatBox: " + name1);
//       await newUser(db, name1);
//     }
//     if (!(await checkUser(db, name2, "createChatBox"))) {
//       console.log("User does not exist for CreateChatBox: " + name2);
//       await newUser(db, name2);
//     }
//     // make name: sorted name in name1_name2
//     const chatBoxName = makeName(name1, name2);
//     let chatBox = 
//       await checkChatBox(db, chatBoxName, "createChatBox");
//     if (!chatBox) chatBox = await newChatBox(db, chatBoxName);

//     return chatBox;
//   },
// };


