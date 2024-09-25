import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='w-48 shadow-lg p-5'>
 
       <ul>
        <li> <Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        </ul>
       <h1 className='font-bold text-xl mt-4'>Subscription</h1>
       <ul>
        <li>Movie</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Game</li>
       </ul>

       <h1 className='font-bold text-xl mt-4'> Watch Later</h1>
       <ul>
        <li>Movie</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Game</li>
       </ul>
    </div>
  )
}

export default Sidebar
