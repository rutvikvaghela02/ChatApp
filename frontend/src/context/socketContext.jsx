import { io } from "socket.io-client";
import { createContext, useEffect, useState ,useContext } from "react";
import { useAuthContext } from "./AuthContext";


const SocketContext = createContext();

export const useSocketContext = () => { return useContext(SocketContext)};

export const SocketContextProvider = ({ children }) => {
    
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const newSocket = io("http://localhost:5000",{
                query : {userId : authUser._id },
                withCredentials : true
            });
            setSocket(newSocket);

            newSocket.on("getOnlineUser", (users) => {
                setOnlineUser(users);
            });

            return () => {
                newSocket.close();
            };
        } else {
            if (socket) {
            socket.close();
            setSocket(null);
        }
    }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUser }}>
            {children}
        </SocketContext.Provider>
    );
};
