import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:"userModel"
        }
    ],
    messages:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:"Message",
            default:[]
        }
    ]
},{timestamps : true});

const ConversationModel = mongoose.model ("Conversation", conversationSchema);

export default ConversationModel;