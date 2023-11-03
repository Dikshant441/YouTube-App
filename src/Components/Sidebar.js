import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-2 m-2 w-48 shadow-lg">
      <ul>
        <li>Gaming</li>
        <li>Gaming</li>
        <li>Gaming</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <li>Gaming</li>
        <li>Gaming</li>
        <li>Gaming</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold">wtach Later</h1>
      <ul>
        <li>Gaming</li>
        <li>Gaming</li>
        <li>Gaming</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
