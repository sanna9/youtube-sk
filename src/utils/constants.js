const GOOGLE_API_KEY = "AIzaSyCuPYPsfQtquhhv3zzSogIDN70Z3ad4bfk";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
  export const YOUTUBE_SEARCH_API_LIST =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&key=" +
    GOOGLE_API_KEY;
