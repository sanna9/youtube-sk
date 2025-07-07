import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ videoData }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { snippet } = videoData;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;

  const currentDate = new Date();
  const publishedDate = new Date(publishedAt);
  const timeDifference = currentDate - publishedDate;

  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const yearsAgo = Math.floor(daysAgo / 365);
  const weeksAgo = Math.floor(daysAgo / 7);

  let timeAgo = "";

  if (yearsAgo > 0) {
    timeAgo = `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  } else if (weeksAgo > 0) {
    timeAgo = `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago`;
  } else if (daysAgo > 0) {
    timeAgo = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else {
    timeAgo = "Today";
  }

  return (
    <div
      className={` ${
        isMenuOpen ? "m-2 p-2" : " m-1 p-1"
      } hover:shadow-lg rounded-lg hover:bg-slate-100`}
    >
      <img
        src={thumbnails?.maxres?.url || thumbnails?.high?.url}
        alt={title}
        className="rounded-lg w-full h-48 object-cover"
      />
      <div
        className="text-sm text-gray-700 pt-2"
        role="group"
        aria-label={`Details about ${title}`}
      >
        <p className="text-sm font-bold">{title}</p>
        <p>{channelTitle}</p>
        <p>{timeAgo}</p>
      </div>
    </div>
  );
};

export default VideoCard;
