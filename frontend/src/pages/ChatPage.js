import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user, colorMode } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex justifyContent="space-between" height="91.5vh" padding="10px">
        {user && <MyChats fetchAgain={fetchAgain} colorMode={colorMode} />}
        {user && (
          <Chatbox
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
            colorMode={colorMode}
          />
        )}
      </Flex>
    </div>
  );
};

export default Chatpage;
