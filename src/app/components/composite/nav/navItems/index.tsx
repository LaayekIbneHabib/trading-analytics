"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Navigate from "@/app/components/ui/navigate";
import { LinkItems as items } from "@/app/components/composite/nav/linkItems";
import SubnavItems from "@/app/components/composite/nav/navItems/subnavItems";

export const NavItem = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.name}>
          <Navigate href={item.href}>
            <Box textDecor="none" _focus={{ boxShadow: "none" }}>
              <Flex
                pl={"4"}
                pt={"3"}
                pb={"3"}
                mx="4"
                justify="space-between"
                align="center"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                onClick={handleClick}
                bg={pathname === item.href ? "brand.primary" : "transparent"}
                color={pathname === item.href ? "white" : ""}
                _hover={
                  pathname !== item.href && !isOpen
                    ? {
                        bg: "rgba(93, 135, 255, 0.1)",
                        color: "brand.primary",
                      }
                    : ""
                }
              >
                <Flex align="space-between">
                  {<Icon mr="4" fontSize="16" as={item.icon} />}
                  {item.name}
                </Flex>
                {item.children && (
                  <Icon
                    mr="4"
                    fontSize="16"
                    as={isOpen ? IoIosArrowDown : IoIosArrowUp}
                  />
                )}
              </Flex>
            </Box>
          </Navigate>
          {item.children && (
            <SubnavItems isOpen={isOpen} subnavitems={item.children} />
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
