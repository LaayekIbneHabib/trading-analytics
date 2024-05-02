// external
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
// internal
import Logo from '../../icons/logo';

const CustomHeading = () => {
  return (
    <Stack gap="1.5rem">
      <Flex justify="center">
        <Logo size="5rem" />
      </Flex>
      <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
        <Heading size={{ base: 'xs', md: 'md' }}>Login with your broker</Heading>
        <Text color="bg.muted">...</Text>
      </Stack>
    </Stack>
  );
};

export default CustomHeading;
