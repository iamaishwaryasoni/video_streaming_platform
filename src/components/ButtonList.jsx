import React from 'react';
import Btns from './Btns';



const ButtonList = () => {
  return (
  <div className='flex' >
      <Btns name="All" />
      <Btns name="Music"/>
      <Btns name="Cooking"/>
      <Btns name="Gaming"/>
      <Btns name="Criket"/>
      <Btns name="News"/>
      <Btns name="Game Shows"/>
      <Btns name="Movies"/>
      <Btns name="Sports"/>
      <Btns name="Live" />
      <Btns name="Motivational"/>
      <Btns name="Hollyhood Songs"/>
    </div>
  )
}

export default ButtonList;
