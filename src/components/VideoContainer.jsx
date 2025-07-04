import { useEffect } from "react";

import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../store/slices/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videos, nextPageToken, loading } = useSelector(
    (store) => store.videos
  );
  // If no videos passed as props, fetch trending videos as fallback
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100 &&
        !loading &&
        nextPageToken
      ) {
        dispatch(fetchVideos(nextPageToken));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading, nextPageToken, dispatch]);

  return (
    <div className="flex flex-wrap">
      {videos.map((video, i) => {
        // Get videoId - YouTube API search uses video.id.videoId
        const videoId = video?.id?.videoId || video?.id;

        // snippet should always exist in YouTube API results
        const snippet = video.snippet;

        return (
          <Link key={videoId} to={"/watch?v=" + videoId} className="width-3">
            <VideoCard videoData={{ snippet }} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
