// external
import { Box, Button, ButtonGroup } from '@chakra-ui/react';
// internal
import { stockBrokers, socialPlatforms } from '../../icons';
import { signIn } from '../../../../auth';

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
    <ButtonGroup variant="secondary" spacing="4">
      {stockBrokers.map(stockBroker => (
        <Button
          key={stockBroker.id}
          h="5rem"
          flexDir="column"
          gap="0.75rem"
          flexGrow="1rem"
          p="2rem"
          fontSize="xs"
          {...commonStyles}
          type="submit"
          isDisabled={stockBroker.status === 'inactive' ? true : false}
        >
          <Box w="1.5rem">{stockBroker.icon}</Box>
          {stockBroker.label}
        </Button>
      ))}
    </ButtonGroup>
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
            await signIn(socialPlatform.id);
          }}
        >
          <Button
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
