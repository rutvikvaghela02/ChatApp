import { IoMdSend } from "react-icons/io";

const MessageInput = () => {
    return (
        <div>
            <form class="flex items-center bg-white px-4 py-2">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <input type="text" id="simple-search" class="bg-white border border-gray-300 text-black text-sm rounded-xl block w-full ps-5 p-2.5" placeholder="Send a Message..." required />
                </div>
                <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white rounded-lg  hover:bg-blue-800 ">
                   <IoMdSend className="text-purple-800 w-6 h-6"/>
                </button>
            </form>
        </div>
    )
}

export default MessageInput
