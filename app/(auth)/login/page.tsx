// external
import { Container, Divider, HStack, Stack, Text, ButtonGroup } from '@chakra-ui/react';
// internal
import { stockBrokers, socialPlatforms } from '../icons';
import { signIn } from '../../../auth';
import { StockBrokerAuthentication, SocialAuthentication } from '../components/authButtons';
import CustomHeading from '../components/customHeading';
import GoToQnAButton from '../components/goToQnAButton';
import CustomFooter from '../components/customFooter';

export default async function Login() {
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <CustomHeading />
      <Stack textAlign="center" my="2rem" mx="1rem" gap="1.5rem">
        <Stack>
          <ButtonGroup variant="secondary" spacing="4">
            {stockBrokers.map(stockBroker => (
              <StockBrokerAuthentication
                key={stockBroker.id}
                label={stockBroker.label}
                status={stockBroker.status}
                type="submit"
              >
                {stockBroker.icon}
              </StockBrokerAuthentication>
            ))}
          </ButtonGroup>
          <GoToQnAButton />
        </Stack>
        <Stack gap="1.5rem">
          <HStack>
            <Divider />
            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
              Don&apos;t have a broker account?
            </Text>
            <Divider />
          </HStack>
          {socialPlatforms.map(socialPlatform => (
            <form
              key={socialPlatform.id}
              action={async () => {
                'use server';
                await signIn(socialPlatform.id);
              }}
            >
              <SocialAuthentication
                label={socialPlatform.label}
                status={socialPlatform.status}
                type="submit"
                icon={socialPlatform.icon}
              />
            </form>
          ))}
        </Stack>
        <CustomFooter />
      </Stack>
    </Container>
  );
}
