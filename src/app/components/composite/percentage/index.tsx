// external
import { Flex, Text } from "@chakra-ui/react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Percentage = () => {
  return (
    <Flex flexDir="column" justify="space-between" align="left">
      <Flex justify="space-between" align="center" gap="">
        <Text fontSize="" as="b">
          36%
        </Text>
        <Flex>
          <IoMdArrowDropup />
          <IoMdArrowDropdown />
        </Flex>
      </Flex>
      <Text>In 1 month, 5 days...</Text>
    </Flex>
  );
};

export default Percentage;
