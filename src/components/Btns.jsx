import React from 'react'

const Btns = ({name}) => {
  return (
    <div>
      <button className='px-4 py-2 bg-gray-200  m-3 rounded-xl hover:bg-black hover:text-white'> {name} </button>

    </div>
  )
}

export default Btns;
