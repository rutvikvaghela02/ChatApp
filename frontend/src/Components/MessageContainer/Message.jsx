import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'

const Message = ({ message }) => {

  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilepic : selectedConversation.profilepic;
  const bgcolor = fromMe ? 'bg-purple-600' : 'bg-slate-700';



  const updatedAtof = message.updatedAt;
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


  return (
    <div className={`chat ${chatClassName} `}>
      <div className="chat-image">
        <div className="w-8 h-8 rounded-full">
          <img src={profilePic} alt="pic" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-opacity-90 rounded-xl text-sm ${bgcolor} `}>
        {message.message}
      </div>
      <div className="chat-footer opacity-80 text-purple-700 text-xs flex-gap-1 items-center">{formattedTime}</div>
    </div>
  )
}

export default Message
