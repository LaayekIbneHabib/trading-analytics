import { extendTheme } from "@chakra-ui/react";

import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";

const theme = extendTheme({
  colors: {
    500: "teal",
    600: "teal",
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
