import useGetMesssages from "../../hooks/useGetMesssages";
import Message from "./Message";
import MessageSkeleton from "../Skeloton/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";
import '../../index.css'

const Messages = () => {
    const [loading, messages] = useGetMesssages();
    useListenMessages();
    const lastMessageRef = useRef(null);


    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
    }, [messages]);

    return (
        <div className="message-container px-4 flex-1 overflow-y-scroll ">
            {!loading && messages.length > 0 &&
                messages.map((message, index) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))
            }

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && messages.length === 0 && (
                <p className="flex justify-center items-center text-lg">Start a new Conversation</p>
            )}
        </div>
    );
};

export default Messages;
