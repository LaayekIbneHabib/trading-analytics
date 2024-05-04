// external
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

const GoToQnAButton = () => {
  return (
    <Button
      mt="0.5rem"
      variant="outline"
      py="2rem"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="1rem"
    >
      <Flex alignItems="center" gap="1rem">
        <Box p="0.5rem" borderRadius="50%" bg="rgba(93, 135, 255, 0.1)">
          <IoShieldCheckmarkOutline style={{ color: '#5d87ff' }} size="2rem" />
        </Box>
        <Flex flexDir="column" textAlign="left" gap=".25rem">
          <Text color="brand.primary" fontSize="sm" fontWeight="700">
            Is it safe to login with my broker?
          </Text>
          <Text fontSize="sm" fontWeight="400">
            Frequently asked questions
          </Text>
        </Flex>
      </Flex>
      <FaArrowRightFromBracket />
    </Button>
  );
};

export default GoToQnAButton;
