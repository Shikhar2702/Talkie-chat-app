import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import ChatPage from "./ChatPage";
const ChatPageWrapper = () => {
  return (
    <ChakraProvider className="ChatPageWrapper">
      <CSSReset />
      <Box width="100%">
        <ChatPage />
      </Box>
    </ChakraProvider>
  );
};

export default ChatPageWrapper;
