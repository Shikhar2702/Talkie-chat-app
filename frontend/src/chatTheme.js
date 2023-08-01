// chatTheme.js
import { extendTheme } from "@chakra-ui/react";

const ChatTheme = extendTheme({
  colors: {
    // Define your custom color modes here
    light: {
      // bg: "white",
      //  background-image:'url("./bgpics/moon.jpg")'
      // bgImage: 'url("./bgpics/moon.jpg")',
      // text: "black",
      // primary: "blue",
    },
    dark: {
      // bg: "black",
      // bgImage: 'url("./bgpics/moon.jpg")',
      // text: "white",
      // primary: "orange",
    },
  },
});

export default ChatTheme;
