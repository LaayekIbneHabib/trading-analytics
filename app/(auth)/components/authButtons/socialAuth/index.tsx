// external
import { Button } from '@chakra-ui/react';
// internal
import { socialPlatform } from '@/app/(auth)/icons';
import { signIn } from '@/auth';

const styles = {
  w: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  variant: 'outline',
  fontWeight: '400',
};

const SocialAuth = () => {
  const { id, status, label, icon } = socialPlatform;

  return (
    <form
      key={id}
      action={async () => {
        'use server';
        await signIn(id, { redirectTo: '/favourites' });
      }}
    >
      <Button
        type="submit"
        px="1rem"
        leftIcon={icon}
        fontSize="sm"
        {...styles}
        isDisabled={status == 'inactive' ? true : false}
      >
        Continue with {label}
      </Button>
    </form>
  );
};

export default SocialAuth;
