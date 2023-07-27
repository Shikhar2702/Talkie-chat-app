// chatTheme.js

import { extendTheme } from "@chakra-ui/react";

const chatTheme = extendTheme({
  colors: {
    // Define your custom color modes here
    light: {
      bg: "white",
      text: "black",
      primary: "blue",
    },
    dark: {
      bg: "black",
      text: "white",
      primary: "orange",
    },
  },
});

export default chatTheme;
