import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/contants";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div
      className={`flex flex-wrap justify-center gap-4 p-4 transition-all duration-300 ${
        isMenuOpen ? "ml-48" : "ml-0"
      }`}
    >
       <ButtonList />
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCart info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

