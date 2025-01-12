// import './index.css'
// import Login from './Pages/login/login'
// import Signup from './Pages/signup/Signup'
// import Home from './Pages/home/Home'
// import {Toaster} from 'react-hot-toast'
// import { Route, Routes, Navigate } from 'react-router-dom'; 
// import { useAuthContext } from './context/AuthContext';

// function App() {
//   const {authUser} = useAuthContext();
//   console.log(authUser)
//   return (
//     <>
//     <div className="p-4 h-screen flex item justify-center">
//       <Routes>
//         <Route path='/' element={authUser ?  <Home /> : <Navigate to="/login" />}/>
//         <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />}/>
//         <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
//       </Routes>
//       <Toaster/>
//     </div>
//     </>
//   )
// }

// export default App


import './index.css';
import Login from './Pages/login/login';
import Signup from './Pages/signup/Signup';
import Home from './Pages/home/Home';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
