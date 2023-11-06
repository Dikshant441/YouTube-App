import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
 const dispatch = useDispatch();
  const searchcache = useSelector((store)=>store.search);
 

  useEffect(() => {
    const timer = setTimeout(() =>{
      if(searchcache[searchQuery]){
        setSuggestion(searchcache[searchQuery]);
      }else{
        getSearchSuggection();
      }
    } , 200);

    return () => {
      clearTimeout(timer);
    };
    // console.log(searchQuery);
  }, [searchQuery]);

  const getSearchSuggection = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    //console.log(json);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };



  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          alt="side-bar"
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-10 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"
        />

        <a href="/">
          <img
            className="h-8"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="w-1/2 h-10 px-4 border-2 border-gray-600 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="h-10 border-2 border-gray-600 p-2 rounded-r-full bg-slate-200">
            Search
          </button>
        </div>

        {showSuggestion && (
          <div className="px-4 bg-white w-[34rem] rounded-lg absolute">
            <ul className="">
              {suggestion.map((s) => (
                <li key={s} className=" hover:bg-gray-200 p-1 border-b-2 border-b-gray-200 ">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10 "
          alt="user-logo"
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
