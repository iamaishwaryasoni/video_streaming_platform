import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName,makeRandomMessage } from '../utils/helper';




const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessage = useSelector((store) =>store.chat.message)

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(20),
                })
            )

        }, 2000);

        return () => clearInterval(i);
    }, []);


  return (
    <>
    <div className='ml-3 mt-1 mb-2 border border-black h-[535px] p-3 rounded-lg bg-slate-100 w-[30rem] overflow-y-scroll flex flex-col-reverse'>
      <div>
      {
        chatMessage && chatMessage.map((c, i) => (
         <ChatMessage key={i} name={c.name} message={c.message}   />
        ))
      }
      </div>
    </div>

    <form className='w-[30rem] p-2 border border-black ml-3 rounded-lg'
    onSubmit={(e) => {
      e.preventDefault();
      dispatch(
        addMessage({
            name: "Aishwarya Soni",
            message: liveMessage,
        })
      )
      setLiveMessage("");
    }}>
        <input type="text"
        className='w-96 border px-2 border-black'
        value={liveMessage}
        onChange={(e) => {
            setLiveMessage(e.target.value);
        }} 
        />
        <button className='px-2 mx-2 bg-green-200 rounded-md font-semibold'>Send</button>
    </form>
    </>
  );
}

export default LiveChat
