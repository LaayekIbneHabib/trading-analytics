// default
import { ReactElement } from 'react';
// external
import { Box, Button, ButtonProps } from '@chakra-ui/react';

interface AuthButtonProps extends ButtonProps {
  label: string;
  status: 'active' | 'inactive';
  icon?: ReactElement;
  key?: number | string;
  children?: React.ReactNode;
}

const commonStyles = {
  w: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  variant: 'outline',
  fontWeight: '400',
};

export const StockBrokerAuthentication = ({
  status,
  children,
  label,
  ...props
}: AuthButtonProps) => {
  return (
    <Button
      {...props}
      h="5rem"
      flexDir="column"
      gap="0.75rem"
      flexGrow="1rem"
      p="2rem"
      fontSize="xs"
      {...commonStyles}
      isDisabled={status === 'inactive' ? true : false}
    >
      <Box w="1.5rem">{children}</Box>
      {label}
    </Button>
  );
};

export const SocialAuthentication = ({ icon, status, label, ...props }: any) => {
  return (
    <Button
      {...props}
      px="1rem"
      leftIcon={icon}
      fontSize="sm"
      {...commonStyles}
      isDisabled={status === 'inactive' ? true : false}
    >
      Continue with {label}
    </Button>
  );
};
