"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Box, Flex, Icon } from "@chakra-ui/react";
import Navigate from "@/app/components/ui/navigate";

const SubnavItems = ({ isOpen, setOpen, subnavitems }: any) => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      {isOpen && (
        <>
          {subnavitems.map((subnavitem: any) => (
            <Navigate key={subnavitem.name} href={subnavitem.href}>
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
                  color={pathname === subnavitem.href ? "brand.primary" : ""}
                  _hover={{ color: "brand.primary" }}
                >
                  {<Icon mr="4" fontSize="12" as={subnavitem.icon} />}
                  {subnavitem.name}
                </Flex>
              </Box>
            </Navigate>
          ))}
        </>
      )}
    </React.Fragment>
  );
};

export default SubnavItems;
