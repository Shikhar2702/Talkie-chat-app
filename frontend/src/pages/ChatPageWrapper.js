// ChatPageWrapper.js

import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import ChatPage from "./ChatPage"; // Import the original ChatPage component

const ChatPageWrapper = () => {
  return (
    <ChakraProvider
      // theme={ChatTheme}
      className="ChatPageWrapper"
    >
      <CSSReset />
      <Box width="100%">
        <ChatPage />
      </Box>
    </ChakraProvider>
  );
};

export default ChatPageWrapper;
