import React, { useState } from "react";
import userSignup from "../../hooks/userSignup";
import { Toaster } from "react-hot-toast";

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  const [signup, loading] = userSignup();

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <Toaster /> {/* Enables toast notifications */}
      <div className="w-full p-12 shadow-2xl rounded-lg bg-gray-300 bg-opacity-25">
        <h1 className="font-bold text-4xl text-white mb-4">
          Signup
          <span className="text-[#33164b] underline decoration-white decoration-[1.5px]">
            ChatWithUs
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <label className="label p-2 mt-3">
              <span className="label-text text-base text-white">Full Name:</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full bg-white input input-bordered border-white h-10 text-black"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full">
            <label className="label p-2 mt-3">
              <span className="label-text text-base text-white">Username:</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full bg-white input input-bordered border-white h-10 text-black"
              value={inputs.username}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full">
            <label className="label p-2 mt-3">
              <span className="label-text text-base text-white">Password:</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full bg-white input input-bordered border-white h-10 text-black"
              value={inputs.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full">
            <label className="label p-2 mt-3">
              <span className="label-text text-base text-white">Confirm Password:</span>
            </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm your password"
              className="w-full bg-white input input-bordered border-white h-10 text-black"
              value={inputs.confirmpassword}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full">
            <label className="label p-2 mt-3">
              <span className="label-text text-base text-white">Gender:</span>
            </label>
            <div className="flex gap-2">
              <label className="flex items-center text-white">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="radio radio-xs radio-bordered radio-primary"
                  checked={inputs.gender === "male"}
                  onChange={handleInputChange}
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center text-white">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="radio radio-xs radio-bordered radio-primary"
                  checked={inputs.gender === "female"}
                  onChange={handleInputChange}
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          <div>
            <a href="/login" className="text-sm text-white hover:underline hover:text-violet-300 my-2">
              Already have an account?
            </a>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="btn bg-violet-800 hover:bg-violet-700 w-full text-white font-semibold text-lg"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
