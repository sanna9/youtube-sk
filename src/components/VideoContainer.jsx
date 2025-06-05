import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const response = await data?.json();
    setVideos(response?.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link className="width-3" to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} videoData={video} />{" "}
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
