import MessageContainer from "../../Components/MessageContainer/MessageContainer"
import Sidebar from "../../Components/sidebar/Sidebar"


const Home = () => {
  return (
    <>

      <div className="flex sm:h-[450px] md:h-[650px] p-1 rounded-lg bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30" >
        <Sidebar/>
        <MessageContainer/>
      </div>

    </>
  )
}

export default Home
