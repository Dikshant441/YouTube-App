import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Assuming you have React Router for navigation

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed top-16 left-0 h-full w-64 bg-gray-900 text-white shadow-lg overflow-y-auto">
      <ul className="space-y-2 p-4">
        <li>
          <Link to="/" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/home.png" alt="Home" className="w-6 h-6" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/shorts" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/shorts.png" alt="Shorts" className="w-6 h-6" />
            <span>Shorts</span>
          </Link>
        </li>
        <li>
          <Link to="/subscriptions" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/subscription.png" alt="Subscription" className="w-6 h-6" />
            <span>Subscription</span>
          </Link>
        </li>
        <li>
          <Link to="/history" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/history.png" alt="History" className="w-6 h-6" />
            <span>History</span>
          </Link>
        </li>
      </ul>
      
      <h2 className="font-bold text-lg px-4 py-2 mt-4">Subscriptions</h2>
      <ul className="space-y-2 px-4">
        <li>
          <Link to="/dhruv-rathi" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://i.ytimg.com/vi/YfYksQztKHs/hqdefault.jpg" alt="Dhruv Rathi" className="w-10 h-10 rounded-full" />
            <span>Dhruv Rathi</span>
          </Link>
        </li>
        <li>
          <Link to="/mrbeast" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://i.ytimg.com/vi/9O1E5C5h2FQ/hqdefault.jpg" alt="MrBeast" className="w-10 h-10 rounded-full" />
            <span>MrBeast</span>
          </Link>
        </li>
        <li>
          <Link to="/6-pack" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://i.ytimg.com/vi/NrgmY7ZWu4o/hqdefault.jpg" alt="6 Pack Prgrm" className="w-10 h-10 rounded-full" />
            <span>6 Pack Prgrm</span>
          </Link>
        </li>
        <li>
          <Link to="/gaming" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/game-controller.png" alt="Gaming" className="w-6 h-6" />
            <span>Gaming</span>
          </Link>
        </li>
      </ul>
      
      <h2 className="font-bold text-lg px-4 py-2 mt-4">Watch Later</h2>
      <ul className="space-y-2 px-4">
        <li>
          <Link to="/show-more" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/plus.png" alt="Show More" className="w-6 h-6" />
            <span>Show More</span>
          </Link>
        </li>
        <li>
          <Link to="/your-videos" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/video.png" alt="Your Videos" className="w-6 h-6" />
            <span>Your Videos</span>
          </Link>
        </li>
        <li>
          <Link to="/liked-videos" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/thumbs-up.png" alt="Like" className="w-6 h-6" />
            <span>Like</span>
          </Link>
        </li>
        <li>
          <Link to="/downloads" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/download.png" alt="Download" className="w-6 h-6" />
            <span>Download</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

