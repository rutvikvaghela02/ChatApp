import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = true;
    return (
        <div className="min-w-[600px] flex flex-col bg-slate-200 ">
            {noChatSelected ? 
            (<NoChatSelected/>
            ) : (
                <>
            <div className="w-full flex items-center gap-2 bg-purple-900 px-5 h-16  cursor-pointer ">
                <div className="avatar online">
                    <div className="w-10 h-10 rounded-full bg-white object-cover">
                        <img src="" alt="user avtar" />
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-base text-white">Rutvik Vaghela</span>
                        <span className="text-sm font-light text-gray-200">online</span>
                    </div>
                </div>
            </div>
            <Messages/>
            <MessageInput/>
            </>
            )}
        </div>
    )
}

export default MessageContainer


const NoChatSelected = () => {
    return <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-purple-700 font-semibold flex flex-col gap-2 items-center">
                <p>Welcome , Rutvik Vaghela</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
}


