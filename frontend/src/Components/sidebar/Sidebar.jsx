import SearchInput from '../sidebar/SearchInput'
import Conversations from '../sidebar/Conversations'
import Logout from './Logout'

const Sidebar = () => {
    return (

        <>
            <div className='px-2 w-full border-violet-800 flex flex-col bg-purple-900 rounded-tl-lg rounded-bl-lg'>

                <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-700 p-2 shadow-lg flex justify-center items-center rounded-lg">
                    <span className="text-white cursor-pointer text-3xl font-extrabold hover:text-gray-900 hover:scale-105 transition-all duration-300">
                        ChatWithUs
                    </span>
                </div>


                <SearchInput />
                <div className="divider py-0 px-2"></div>
                <Conversations />
                <Logout />
            </div>
        </>
    )
}

export default Sidebar
