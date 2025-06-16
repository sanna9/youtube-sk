import commentData from "../../../utils/commentData";
import CommentList from "./CommentList";

const CommentContainer = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <CommentList commentData={commentData} />
    </div>
  );
};

export default CommentContainer;
