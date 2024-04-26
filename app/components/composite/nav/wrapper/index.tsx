"use client";

// default
import React from "react";
// internal
import { SidebarContent } from "../sidebarContent";
import { MobileNav } from "../mobileNav";
// external
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
