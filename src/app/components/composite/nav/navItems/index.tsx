"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Navigate from "@/app/components/ui/navigate";
import { LinkItems as items } from "@/app/components/composite/nav/linkItems";

export const NavItem = () => {
  const [isClicked, setIsClicked] = useState(false);
  const pathname = usePathname();

  return (
    <React.Fragment>
      {items.map((item) =>
        !item.children ? (
          <React.Fragment key={item.name}>
            <Navigate href={item.href}>
              <Box textDecor="none" _focus={{ boxShadow: "none" }}>
                <Flex
                  pl={"4"}
                  pr={"4"}
                  pt={"3"}
                  pb={"3"}
                  mx="4"
                  align="center"
                  borderRadius="lg"
                  role="group"
                  cursor="pointer"
                  bg={pathname === item.href ? "brand.primary" : "transparent"}
                  color={pathname === item.href ? "white" : ""}
                  _hover={
                    pathname !== item.href
                      ? {
                          bg: "rgba(93, 135, 255, 0.1)",
                          color: "brand.primary",
                        }
                      : ""
                  }
                  onClick={() => setIsClicked(false)}
                >
                  {<Icon mr="4" fontSize="16" as={item.icon} />}
                  {item.name}
                </Flex>
              </Box>
            </Navigate>
          </React.Fragment>
        ) : (
          <React.Fragment key={item.name}>
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
                bg={isClicked ? "brand.primary" : "transparent"}
                color={isClicked ? "white" : ""}
                _hover={
                  !isClicked
                    ? {
                        bg: "rgba(93, 135, 255, 0.1)",
                        color: "brand.primary",
                      }
                    : ""
                }
                onClick={() => setIsClicked((prevState) => !prevState)}
              >
                <Flex align="center">
                  {<Icon mr="4" fontSize="16" as={item.icon} />}
                  {item.name}
                </Flex>
                {
                  <Icon
                    mr="4"
                    fontSize="16"
                    as={isClicked ? IoIosArrowDown : IoIosArrowUp}
                  />
                }
              </Flex>
            </Box>
            {isClicked && (
              <SubnavItem
                key={`${item.name}-subnav-item`}
                subitems={item.children}
              />
            )}
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
};

const SubnavItem = ({ subitems }: any) => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      {subitems.map((subitem: any) => (
        <Navigate key={subitem.name} href={subitem.href}>
          <Box
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <Flex
              pl={"4"}
              pr={"4"}
              pt={"3"}
              pb={"3"}
              mx="4"
              align="center"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              color={pathname === subitem.href ? "brand.primary" : ""}
              _hover={{ color: "brand.primary" }}
            >
              {<Icon mr="4" fontSize="12" as={subitem.icon} />}
              {subitem.name}
            </Flex>
          </Box>
        </Navigate>
      ))}
    </React.Fragment>
  );
};
