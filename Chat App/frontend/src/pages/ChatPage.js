import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const data = await axios.get("/api/chat");
    console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      <div>ChatPage</div>
      {/* <div>
        {chats.map((chat) => {
          return <div>{chat.chatName}</div>;
        })}
      </div> */}
    </>
  );
};

export default ChatPage;
