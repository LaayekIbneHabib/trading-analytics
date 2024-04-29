// default
import React from 'react';
// external
import { Box, Button } from '@chakra-ui/react';

interface AuthButtonProps {
  label: string;
  type: 'submit' | 'button' | 'reset';
  status: string | string;
  icon?: any;
  key?: number | string;
  children?: React.ReactNode;
}

export const BrokerAuthentication = ({ label, status, children, ...props }: AuthButtonProps) => {
  return (
    <Button
      {...props}
      h="5rem"
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="0.75rem"
      p="2rem"
      flexGrow="1rem"
      fontSize="xs"
      fontWeight="400"
      variant="outline"
      isDisabled={status === 'inactive' ? true : false}
    >
      <Box w="1.5rem">{children}</Box>
      {label}
    </Button>
  );
};

export const SocialAuthentication = ({ label, status, icon, ...props }: AuthButtonProps) => {
  return (
    <Button
      {...props}
      w="100%"
      px="1rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      leftIcon={icon}
      variant="outline"
      fontSize="sm"
      fontWeight="400"
      isDisabled={status === 'inactive' ? true : false}
    >
      Continue with {label}
    </Button>
  );
};
