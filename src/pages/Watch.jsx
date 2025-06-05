import React, { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/slices/appSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + params.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
