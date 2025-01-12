import { useSocketContext } from '../../context/socketContext';
import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation }) => {

    const updatedAtof = conversation.updatedAt;
    const dateObj = new Date(updatedAtof);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = String(dateObj.getFullYear()).slice(-2);

    const formattedDate = `${day}-${month}-${year}`;

    const formattedTime = dateObj.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    const {selectedConversation, setSelectedConversation}=useConversation()
    const isSelected = selectedConversation?._id === conversation._id;

    const {onlineUser} = useSocketContext();
    const isOnline = onlineUser.includes(conversation._id)

    return (
        <>
            <div className={`w-full flex gap-3 border border-purple-300 border-opacity-10 bg-purple-900 rounded-lg hover:bg-violet-800 h-14 p-2 py-1 cursor-pointer my-[2px] ${isSelected ? 'bg-violet-500'  : ""}`}
            onClick={()=>setSelectedConversation(conversation)}>
                <div className={`avatar ${isOnline ? 'online' : ""}`}>
                    <div className="w-10 h-10 rounded-full bg-white object-cover">
                        <img src={conversation.profilepic} alt="user avtar" />
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-base text-white">{conversation.name}</span>
                        <span className="text-sm font-light text-gray-200 break-words w-48 mr-8">{conversation.username}</span>
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-end">
                        <span className="text-xs font-light text-gray-200 w-12">{formattedDate}</span>
                        <span className="text-xs font-light text-gray-200 w-12">{formattedTime}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conversation
