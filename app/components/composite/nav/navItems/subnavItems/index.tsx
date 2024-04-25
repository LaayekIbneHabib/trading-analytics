"use client";

// default
import { usePathname } from "next/navigation";
// internal
import CustomLink from "../../../../ui/customLink";
// external
import { Flex, Icon } from "@chakra-ui/react";

interface SubnavItemsProps {
  items: any[];
}

const SubnavItems = ({ items }: SubnavItemsProps) => {
  const pathname = usePathname();
  return (
    <>
      {items.map((item: any, index: number) => (
        <CustomLink href={item.href} key={index}>
          <Flex
            px="4"
            py="3"
            mx="4"
            align="center"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            color={pathname === item.href ? "brand.primary" : ""}
            _hover={{ color: "brand.primary" }}
          >
            {<Icon mr="4" fontSize="12" as={item.icon} />}
            {item.name}
          </Flex>
        </CustomLink>
      ))}
    </>
  );
};

export default SubnavItems;