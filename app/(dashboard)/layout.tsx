// default
import React from "react";
// internal
import { authConfig, loginIsRequiredServer } from "../../lib/auth";
import Wrapper from "../components/composite/nav/wrapper";
// external
import { getServerSession } from "next-auth";
import { Container } from "@chakra-ui/react";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  await loginIsRequiredServer();
  const session = await getServerSession(authConfig);
  await wait(1000);

  return (
    <React.Fragment>
      {session && (
        <Wrapper>
          <Container maxW="container.xl">{children}</Container>
        </Wrapper>
      )}
    </React.Fragment>
  );
}
