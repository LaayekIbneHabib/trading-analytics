"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Box,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChartLine } from "react-icons/fa";
import { SidebarProps } from "@/app/types/interfaces";
import { LinkItems } from "@/app/components/nav/link-items";
import { NavItem } from "@/app/components/nav/nav-items";

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) onClose();
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Flex alignItems="center" gap="4">
          <FaChartLine />
          <Text fontSize="lg" fontFamily="monospace" fontWeight="bold">
            Tradingview
          </Text>
        </Flex>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex direction="column" gap="2">
        {LinkItems.map((link) => (
          <NavItem
            bg={pathname === link.href ? "teal" : ""}
            color={pathname === link.href ? "white" : ""}
            _hover={{ bg: "teal", color: "white" }}
            key={link.name}
            icon={link.icon}
          >
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};
