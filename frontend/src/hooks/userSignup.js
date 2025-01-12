import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const {AuthUser , setAuthUser} = useAuthContext();

  const signup = async ({ name, username, password, confirmpassword, gender }) => {
    // Validate inputs
    const isValid = validateInputs({ name, username, password, confirmpassword, gender });
    if (!isValid) return;

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        username,
        password,
        confirmpassword,
        gender,
      });

      const data = response.data;
      console.log("Response received:", response.data);
      toast.success("Signup successful!");

      if(response.data.error){
        throw new Error(response.data.error);
      }

      localStorage.setItem('chat-user',JSON.stringify(response.data))
      setAuthUser(response.data);
    } catch (error) {
      console.error("Error during signup:", error);
      const errorMessage = error.response?.data?.error || "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return [signup, loading];
};

export default useSignup;

const validateInputs = ({ name, username, password, confirmpassword, gender }) => {
  if (!name || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill in all fields.");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Passwords do not match.");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters.");
    return false;
  }
  return true;
};
