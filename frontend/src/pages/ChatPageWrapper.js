// ChatPageWrapper.js

import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import chatTheme from "../chatTheme"; // Import the custom theme file
import ChatPage from "./ChatPage"; // Import the original ChatPage component

const ChatPageWrapper = () => {
  return (
    <ChakraProvider theme={chatTheme}>
      <CSSReset />
      <Box width="100%">
        <ChatPage />
      </Box>
    </ChakraProvider>
  );
};

export default ChatPageWrapper;
