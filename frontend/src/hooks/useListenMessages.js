import { useEffect } from "react";

import { useSocketContext } from "../context/socketContext";
import useConversation from "../zustand/useConversation";
import notifcationsSound from "../assets/sound/iphone_ding.mp3"

const useListenMessages = () => {
    const { socket } = useSocketContext(); 
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        if (!socket) {
            console.error("Socket is not initialized or connected");
            return;
        }

        if(socket){
            console.log("socket", socket)
        }

        console.log("old messages array" , messages);
        
        socket?.on('newMessages', (newmessage)=>{
            const sound = new Audio(notifcationsSound);
            sound.play();
            setMessages([...messages,newmessage]);
        })

        return () => {
            socket?.off("newMessages");
        };
    }, [socket, setMessages,messages]);
};

export default useListenMessages;
