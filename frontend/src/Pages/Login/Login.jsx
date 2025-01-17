import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
  }


  return <>
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="w-full p-12 shadow-2xl rounded-lg bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25" >
        <h1 className="font-bold text-4xl text-white mb-4 text-transparent">
          Login
          <span className="text-[#33164b] text-4xl underline decoration-white decoration-[1.5px] underline-offset-2 hover:text-[#aa76ba] transition-all duration-300 ease-in-out shadow-lg">
            of ChatWithUs
          </span>
        </h1>
        <form onSubmit={handleSubmit} >
          <div className="w-full">
            <label className="label p-2 mt-3">
              <span className="label-text text-base text-white font-medium">Username :</span>
            </label>
            <input type="text" placeholder="Enter your Username" className="w-full bg-white input input-bordered border-white h-10 text-black"
              value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="w-full">
            <label className="label p-2 mt-3">
              <span className="label-text text-base text-white font-medium">Password :</span>
            </label>
            <input type="password" placeholder="Enter your Password" className="w-full bg-white input input-bordered border-white h-10 text-black"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <Link to="/signup" className="text-sm text-white hover:underline hover:text-violet-300 my-2 inline-block">{"don't"} have an account?</Link>
          </div>
          <div className="w-full justify-center flex items-center">
            <button class="btn bg-violet-800 hover:bg-violet-700 w-full text-white font-semibold text-lg" disabled={loading}>
              {loading ? <span className="loading-spinner loading"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
}

export default Login
