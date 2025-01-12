import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import toast from "react-hot-toast";
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const previousConversationId = useRef(null);

    useEffect(() => {
        const getMessages = async () => {
            if (selectedConversation?._id === previousConversationId.current) {
                return;
            }

            setLoading(true);
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/messages/${selectedConversation._id}`,
                    {
                        withCredentials: true,
                    }
                );

                const data = response.data;
                console.log(data);

                if (data.error) {
                    toast.error("failed to fetch the data.");
                } else {
                    setMessages(data);
                }

                previousConversationId.current = selectedConversation._id;
                
            } catch (error) {
                toast.error("Failed to fetch messages");
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation?._id, setMessages]);

    return [loading, messages];
};

export default useGetMessages;
