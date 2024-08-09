import React from "react";

const VideoCart = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-64 shadow-lg rounded-lg bg-white">
      <img
        className="w-full h-36 object-cover rounded-lg"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="mt-2">
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{channelTitle}</p>
        <p className="text-sm text-gray-500 mt-1">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCart;
