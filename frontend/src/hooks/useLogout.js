import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/auth/logout');
            console.log('Logout response:', res.data);
            const data = res.data; 
    
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.removeItem('chat-user');
            localStorage.removeItem('authUser');
            setAuthUser(null);
            toast.success('Logout successfully');
    
        } catch (error) {
            console.error(error); 
            toast.error("An error occurred during logout");
        } finally {
            setLoading(false);
        }
    };
    
    return {logout};
};

export default useLogout;
