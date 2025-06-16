import { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import {
  geenrateRandomMessage,
  generateRandomName,
} from "../../../utils/helper";

const LiveChat = ({ className }) => {
  const dispatch = useDispatch();
  const [LiveChatMessage, setLiveChatMessage] = useState("");
  const chatMessages = useSelector((store) => store?.chat?.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: geenrateRandomMessage(),
        })
      );
    }, 5000);
    return () => clearInterval(i);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addMessage({
        name: generateRandomName(),
        message: LiveChatMessage,
      })
    );
    LiveChatMessage && setLiveChatMessage("");
  };
  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div
        className={`border border-gray-200 rounded-lg h-[500px] overflow-y-scroll`}
      >
        {chatMessages.length > 0 &&
          chatMessages.map((chatItem, index) => (
            <LiveMessage
              key={index}
              name={chatItem.name}
              message={chatItem.message}
            />
          ))}
      </div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex items-center justify-between p-2"
      >
        <input
          type="text"
          className="border border-gray-200 rounded-lg p-2 m-2 w-full"
          placeholder="Type a message..."
          value={LiveChatMessage}
          onChange={(e) => setLiveChatMessage(e.target.value)}
        />
        <button className="bg-blue-500 text-white rounded-lg p-2 m-2">
          Send
        </button>
      </form>
    </div>
  );
};
export default LiveChat;
