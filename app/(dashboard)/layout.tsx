"use client";

// default
import React from "react";
// internal
import { authConfig, loginIsRequiredServer } from "../lib/auth";
import { SidebarContent } from "../components/composite/nav/sidebarContent";
import { MobileNav } from "../components/composite/nav/mobileNav";
// external
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { getServerSession } from "next-auth";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  await loginIsRequiredServer();
  const session = await getServerSession(authConfig);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      {session && (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
          <SidebarContent
            onClose={onClose}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          <MobileNav onOpen={onOpen} />
          <Box ml={{ base: 0, md: 60 }} py="4" overflowX="hidden">
            <Container maxW="container.xl">{children}</Container>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
}
