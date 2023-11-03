import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/contants";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCart key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
