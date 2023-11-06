import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  //console.log(searchParam.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
        ></iframe>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
