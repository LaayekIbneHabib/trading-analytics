"use client";

// internal
import theme from "../theme/theme";
// external
import { ChakraProvider } from "@chakra-ui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
