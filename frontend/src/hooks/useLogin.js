import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const isValid = validateInputs({ username, password });
    if (!isValid) return;

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password },
        { withCredentials: true }
      );

      const data = res.data;

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

      toast.success("Login Successfully");
      console.log("Login response:", data);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "An error occurred";
      toast.error(errorMessage);
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;



const validateInputs = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill in all fields.");
    return false;
  }
  return true;
};
