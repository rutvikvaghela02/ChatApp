import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId :{
        type:mongoose.Schema.Types.ObjectId,
        ref: "userModel",
        required : true
    },
    recieverId :{
        type:mongoose.Schema.Types.ObjectId,
        ref: "userModel",
        required : true
    },
    message:{
        type : String,
        required : true
    }
},{timestamps : true});

const MessageModel = mongoose.model ("Message", messageSchema);

export default MessageModel;