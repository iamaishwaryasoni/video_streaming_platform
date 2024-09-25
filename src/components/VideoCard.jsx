import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    // const {snippet  , statistics} = info;
    // const {channelTitle, title, thumbnails } = snippet;
  return (
    
    <div className='p-2 m-2 w-80 h-[350px] shadow-lg '>
      <img
      className='rounded-lg'
      src={info && info.snippet.thumbnails.medium.url} 
      alt="thumbnail" />
      <ul>
        <li className='font-bold py-2'>{info && info.snippet.title}</li>
        <li>{info && info.snippet.channelTitle}</li>
        <li>{info && info.statistics.viewCount} Views</li>
      </ul>
    </div>
  )
}

export default VideoCard
