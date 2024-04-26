"use client";

// internal
import theme from "../theme/theme";
// external
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </SessionProvider>
  );
}
