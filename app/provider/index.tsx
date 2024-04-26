"use client";

// internal
import theme from "../theme/theme";
// external
import { ChakraProvider } from "@chakra-ui/react";

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
