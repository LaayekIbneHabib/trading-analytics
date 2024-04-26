"use client";

// default
import React from "react";
// internal
import Dashboard from "./page";
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

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Dashboard>
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
    </Dashboard>
  );
}
