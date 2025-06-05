import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({ propVideos }) => {
  const [videos, setVideos] = useState([]);

  // If no videos passed as props, fetch trending videos as fallback
  useEffect(() => {
    if (!propVideos) {
      getVideo();
    }
  }, [propVideos]);

  const getVideo = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const response = await data.json();
      setVideos(response.items);
    } catch (error) {
      console.error("Failed to fetch trending videos:", error);
    }
  };

  const renderVideos = propVideos || videos;
  console.log("renderVideos", renderVideos);

  return (
    <div className="flex flex-wrap">
      {renderVideos.map((video, i) => {
        // Get videoId - YouTube API search uses video.id.videoId
        const videoId = video.id?.videoId || video.id;

        // snippet should always exist in YouTube API results
        const snippet = video.snippet;

        return (
          <Link
            key={videoId || i}
            to={"/watch?v=" + videoId}
            className="width-3"
          >
            <VideoCard videoData={{ snippet }} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
