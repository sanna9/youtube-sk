import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import VideoContainer from "../../../components/VideoContainer";
import { fetchYouTubeResults } from "../redux/searchThunks";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const dispatch = useDispatch();

  const { results, status, error } = useSelector(
    (state) => state.searchResults
  );

useEffect(() => {
  if (searchQuery && results.length === 0) {
    dispatch(fetchYouTubeResults(searchQuery));
  }
}, [dispatch, searchQuery]);

  return (
    <div className="mt-16">
      {status === "loading" && <p className="text-center">Loading...</p>}
      {status === "failed" && (
        <p className="text-center text-red-500">{error}</p>
      )}
      {status === "succeeded" && <VideoContainer propVideos={results} />}
    </div>
  );
};

export default SearchResult;
