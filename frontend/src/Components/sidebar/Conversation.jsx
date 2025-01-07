const Conversation = () => {
    return (
        <>
            <div className="w-full flex gap-3 border border-purple-300 border-opacity-10 bg-purple-900 rounded-lg hover:bg-violet-800 h-14 p-2 py-1 cursor-pointer my-[2px]">
                <div className="avatar online">
                    <div className="w-10 h-10 rounded-full bg-white object-cover">
                        <img src="" alt="user avtar" />
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-base text-white">Rutvik Vaghela</span>
                        <span className="text-sm font-light text-gray-200 break-words w-48 mr-8">How are you ? where are you? i am going right now.</span>
                    </div>
                    <div>
                        <span className="text-xs font-light text-gray-200 ">12.30</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conversation
