const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image">
            <div className="w-8 h-8 rounded-full">
                <img src="" alt="profile pic" />
            </div>
        </div>
        <div className="chat-bubble text-white bg-purple-600 bg-opacity-90 rounded-xl text-sm">
            Hi How Are You?
        </div>
        <div className="chat-footer opacity-80 text-purple-700 text-xs flex-gap-1 items-center">01.58</div>
    </div>
  )
}

export default Message
