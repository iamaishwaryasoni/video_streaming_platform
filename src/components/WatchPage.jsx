import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
 
const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    console.log(videoId);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    },[dispatch])
  return (
    <div className=''>
    <div className='py-4 px-16 flex'>
      <div>
      <iframe width="950" height="540" 
      src={"https://www.youtube.com/embed/pQlAZn6-syk?si=yzeozxVo8u7McRC8" } 
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className='rounded-2xl'>
      </iframe>
      </div>
      <div className=''>
        <LiveChat />
      </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage;

// referrerPolicy="strict-origin-when-cross-origin"