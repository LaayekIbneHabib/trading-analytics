// default
import React from "react";
// internal
import Wrapper from "../components/composite/nav/wrapper";
// external
import { Container } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <Wrapper>
        <Container maxW="container.xl">{children}</Container>
      </Wrapper>
    </React.Fragment>
  );
}
