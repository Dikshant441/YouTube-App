import React from "react";

const VideoCart = ({info}) => {

//   console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-64 shadow-lg rounded-lg">
      <img className="rounded-lg " alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li className="">{channelTitle}</li>
        <li className="">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCart;
