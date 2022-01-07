import mongoose from "mongoose";
const {Schema} = mongoose

const UserSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  nickname: { type: String, required: true },
  // departmentLevel: { type: String, required: true },
  email: { type: String, required: true },
  clubs: [{type: String}],
});

const ClubSchema = new Schema({
  name: { type: String, required: true },
  host: { type: String, required: true },
  introduction: { type: String, required: true },
  invitation: { type: String, required: true },
  time: { type: String, required: true },
  member: [{user:{ type: mongoose.Types.ObjectId, ref: "User"}, 
            identity:{type:Boolean, required:true}}], 
            // true:administrator, false:normal member
});

const UserModel = mongoose.model("User", UserSchema);
const ClubModel = mongoose.model("Club", ClubSchema);
export {UserModel, ClubModel}

// const UserSchema = new Schema({
//   name: { type: String, required: true },
// });
// const ChatBoxSchema = new Schema({
//   name: { type: String, required: true },
//   messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
// });
// const MessageSchema = new Schema({
//   sender: { type: mongoose.Types.ObjectId, ref: "User" },
//   body: { type: String, required: true },
// });
// const UserSchema = new Schema({
//   name: { type: String, required: true },
// });
// const UserModel = mongoose.model("User", UserSchema);
// const ChatBoxModel = mongoose.model("ChatBox", ChatBoxSchema);
// const MessageModel = mongoose.model("Message", MessageSchema);

// export {UserModel, ChatBoxModel, MessageModel}
