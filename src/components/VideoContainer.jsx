import { useEffect } from "react";

import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../store/slices/videoSlice";
import { WATCH_PATH } from "../utils/routePaths";
import ShimmerUI from "./ShimmerUI";

const VideoContainer = ({ propVideos }) => {
  const dispatch = useDispatch();
  const { videos, nextPageToken, loading } = useSelector(
    (store) => store.videos
  );

  useEffect(() => {
    if (propVideos) return;
    const onScroll = () => {
      // Check if user has scrolled to the bottom of the page
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

  useEffect(() => {
    // Fetch trending videos only if no propVideos are passed (on Home)
    if (!propVideos && videos.length === 0) {
      dispatch(fetchVideos());
    }
  }, [dispatch, propVideos, videos]);

  const videosToRender = propVideos || videos;
  return (
    <div className="flex flex-wrap">
      {loading && videosToRender.length === 0 ? (
        <ShimmerUI />
      ) : (
        videosToRender.map((video) => {
          const videoId = video?.id?.videoId || video?.id;
          const snippet = video.snippet;

          return (
            <Link
              key={videoId}
              to={`${WATCH_PATH}?v=` + videoId}
              className="width-3"
              aria-label="Watch video"
            >
              <VideoCard videoData={{ snippet }} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default VideoContainer;
