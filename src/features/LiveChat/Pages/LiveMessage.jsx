import userImg from "../../../assets/userImage.png";
const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex gap-3 items-center p-3 text-sm">
      <img src={userImg} width="30" height="30" alt="user-image" />
      <div className="flex gap-2">
        <p className="text-gray-400 font-bold">{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LiveMessage;
