import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/400.css";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#5D87FF",
      hover: "#5d87ff1a",
    },
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
});

export default theme;
