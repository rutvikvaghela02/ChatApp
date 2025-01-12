import React, { useState } from 'react'
import toast from "react-hot-toast";
import axios from "axios";

import useConversation from '../zustand/useConversation'


const useSentMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation()


    const sentMessage = async (message) => {

        setLoading(true)
        try {
            const response = await axios.post(`http://localhost:5000/api/messages/send/${selectedConversation._id}`, {
                message
            },{
                withCredentials: true,
              })
            const data = response.data;
            if (data.error) {
                throw new Error(data.error);
            }

            setMessages([...messages, data]);

        } catch (error) {
            toast.error("failed to send a message.")
        }
        finally {
            setLoading(false)
        }
    };
    return [loading, sentMessage]
}

export default useSentMessage
