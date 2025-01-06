import ConversationModel from '../models/Conversation.model.js';
import MessageModel from '../models/Message.model.js';

export const sendMessage = async (req,res)=>{
    try {
        const {message} = req.body;
        const {id : recieverId} =req.params;
        const senderId = req.user._id;

        let conversation = await ConversationModel.findOne({
            participants : {$all: [senderId ,recieverId]}
        })
        
        if(!conversation){
            conversation = await ConversationModel.create({
                participants:[senderId, recieverId],
            })
        }

        const newMessage = new MessageModel({
            senderId ,
            recieverId ,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(200).json(newMessage);

    } catch (error) {
        console.log("sendmessage controller error.", error.message);
        res.status(500).json({error:"internal server error."});
    }
}


export const getMessages = async (req , res)=>{
    try {
        const {id : userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await ConversationModel.findOne({
            participants : { $all: [ senderId, userToChatId] },
        }).populate("messages");

        if(!conversation){
        return res.status(200).json([]);
        }

        const msg=conversation.messages
        res.status(200).json(msg);
        
    } catch (error) {
        console.log("getmessage controller error", error.message);
        res.status(500).json({error:"internal server error."});
    }
}
