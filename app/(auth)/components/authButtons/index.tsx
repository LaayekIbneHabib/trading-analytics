// external
import { Box, Button } from '@chakra-ui/react';
// internal
import { stockBrokers, socialPlatforms } from '../../icons';
import { signIn, signOut } from '../../../../auth';

const commonStyles = {
  w: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  variant: 'outline',
  fontWeight: '400',
};

export const StockBrokerAuthentication = () => {
  return (
    <>
      {stockBrokers.map(stockBroker => (
        <Button
          key={stockBroker.id}
          type="submit"
          h="5rem"
          flexDir="column"
          gap="0.75rem"
          flexGrow="1rem"
          p="2rem"
          fontSize="xs"
          {...commonStyles}
          isDisabled={stockBroker.status === 'inactive' ? true : false}
        >
          <Box w="1.5rem">{stockBroker.icon}</Box>
          {stockBroker.label}
        </Button>
      ))}
    </>
  );
};

export const SocialAuthentication = () => {
  return (
    <>
      {socialPlatforms.map(socialPlatform => (
        <form
          key={socialPlatform.id}
          action={async () => {
            'use server';
            await signIn(socialPlatform.id, { redirectTo: '/favourites' });
          }}
        >
          <Button
            type="submit"
            px="1rem"
            leftIcon={socialPlatform.icon}
            fontSize="sm"
            {...commonStyles}
            isDisabled={socialPlatform.status === 'inactive' ? true : false}
          >
            Continue with {socialPlatform.label}
          </Button>
        </form>
      ))}
    </>
  );
};

type SignOutProps = {
  children?: React.ReactNode;
};

export const SignOut = ({ children }: SignOutProps) => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button type="submit">{children}</Button>
    </form>
  );
};
