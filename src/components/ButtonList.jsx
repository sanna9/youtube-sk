import { useState } from "react";
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
  const [selected, setSelected] = useState("All");
  return (
    <div className="custom-scroll-none w-full">
      <div
        role="toolbar"
        aria-label="Video category filters"
        className="inline-flex space-x-3 px-2"
      >
        {contentList.map((content, index) => {
          return (
            <Button
              key={index}
              label={content}
              ariaLabel={content}
              onClick={() => setSelected(content)}
              isSelected={selected === content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ButtonList;
