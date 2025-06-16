import Comment from "./comment";

const CommentList = ({ commentData }) => {
  return (
    <div>
      {commentData?.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="ml-4">
            <CommentList commentData={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default CommentList;
