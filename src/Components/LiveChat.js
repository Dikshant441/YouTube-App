import { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const [liveMessgae, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  // chatMessage is diff from component (ChatMessages)
  useEffect(() => {
    const i = setInterval(() => {
      //API CALLING
      console.log("API caliing");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages(20) + " 🚀",
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full ml-3 h-[600px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {
          // dont use index as a key
          chatMessages.map((c, i) => (
            <ChatMessages key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form
        className="w-full mx-3 my-2 p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("on form submit");
        }}
      >
        <input
          className="w-3/4 p-1 border border-black"
          type="text"
          vlaue={liveMessgae}
          onClick={(e) => {
            setLiveMessage(e.target.vlaue);
          }}
        />
        <button className="w-20 mx-4 bg-green-100">send</button>
      </form>
    </>
  );
};

export default LiveChat;
