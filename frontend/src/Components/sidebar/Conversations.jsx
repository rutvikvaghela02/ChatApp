import { useSocketContext } from "../../context/socketContext";
import useGetConversations from "../../hooks/useGetConversations"
import CoversationSkeleton from "../Skeloton/CoversationSkeloton";
import Conversation from "./Conversation"

const Conversations = () => {
    const {loading , conversations} = useGetConversations();

    return (
        
            <div className="conversation-container flex flex-col overflow-y-auto py-2 pb-16">
                {conversations.map((conversation)=>(
                    <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    />
                ))}
                {loading ? <CoversationSkeleton/> : null}
        </div>
    )

}

export default Conversations
