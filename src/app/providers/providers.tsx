"use client";

// internal
import { store } from "@/state/store";
import theme from "@/app/theme/theme";
// external
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ChakraProvider>
  );
}
