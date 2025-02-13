import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoConatiner = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
     getVideos();
    }, [])
    
    const getVideos = async  () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const dataJson = await data.json();
        // console.log(dataJson.items);
        setVideos(dataJson.items);
        
    }
    return(
       <div className="flex flex-wrap">
       
        {videos && videos.map((video) => (  
             <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard    info={video}/> 
        </Link>
        ))}
        
      
       </div>
    )
}

export default VideoConatiner;