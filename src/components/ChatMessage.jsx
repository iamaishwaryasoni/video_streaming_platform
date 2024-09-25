import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm'>

        <img 
        className='w-10, h-10'
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
         alt="user" />
      
      <span className='font-bold p-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage 

