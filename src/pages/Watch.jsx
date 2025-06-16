import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "../features/comment/pages/CommentContainer";
import LiveChat from "../features/LiveChat/Pages/LiveChat";

const Watch = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex w-full h-full gap-10">
      <div className="w-2/3">
        <iframe
          className="rounded-2xl"
          width="100%"
          height="500"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <CommentContainer />
      </div>
      <LiveChat className="w-1/3" />
    </div>
  );
};

export default Watch;
