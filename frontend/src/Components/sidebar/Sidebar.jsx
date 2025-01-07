import SearchInput from '../sidebar/SearchInput'
import Conversations from '../sidebar/Conversations'
import Logout from './Logout'

const Sidebar = () => {
    return (

        <>
            <div className='px-2 border-violet-800 flex flex-col bg-purple-900 rounded-tl-lg rounded-bl-lg'>
                <SearchInput />
                <div className="divider py-0 px-2"></div>
                <Conversations />
                <Logout />
            </div>
        </>
    )
}

export default Sidebar
