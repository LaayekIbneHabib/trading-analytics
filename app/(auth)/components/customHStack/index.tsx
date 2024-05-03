// external
import { Divider, HStack, Text } from '@chakra-ui/react';

const CustomHStack = () => {
  return (
    <HStack>
      <Divider />
      <Text textStyle="sm" whiteSpace="nowrap">
        Don&apos;t have a broker account?
      </Text>
      <Divider />
    </HStack>
  );
};

export default CustomHStack;
