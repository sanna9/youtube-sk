import React from "react";
import Button from "./Button";

const contentList = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentine",
  "Movies",
  "TV Shows",
  "News",

  "Fashion",
  "Comedy",
  "Dance",
  "Art",
  "Science",
  "Technology",
  "Education",
  "Travel",
  "Fitness",
  "Health",
  "Motivation",
  "Podcasts",
];
const ButtonList = () => {
  return (
    <div className="custom-scroll-none w-full">
      <div className="inline-flex space-x-3 px-2">
        {contentList.map((content, index) => {
          return <Button key={index} label={content} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
