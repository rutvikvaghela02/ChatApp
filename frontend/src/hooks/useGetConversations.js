import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import axios from "axios";


const useGetConversations=()=>{
    const [loading,setLoading]=useState(false);
    const [conversations,setConversations]= useState([]);

    useEffect(()=>{
        const getCoversation = async()=>{
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/api/users/',
                    { withCredentials: true }
                );
                const data = response.data;

                if(data.error){
                    throw new Error(data);
                }
                setConversations(response.data);

            } catch (error) {
                toast.error("server is busy please try after some time");
            }finally{
                setLoading(false);
            }
        }
        getCoversation();
    },[]);

    return {loading, conversations}

}

export default useGetConversations;