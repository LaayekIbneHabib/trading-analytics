// external
import { Stack, ButtonGroup } from '@chakra-ui/react';
// internal
import { StockBrokerAuthentication, SocialAuthentication } from '../components/authButtons';
import CustomHeading from '../components/customHeading';
import GoToQnAButton from '../components/goToQnAButton';
import CustomFooter from '../components/customFooter';
import CustomContainer from '../components/customContainer';
import CustomHStack from '../components/customHStack';

export default function Login() {
  return (
    <CustomContainer>
      <CustomHeading />
      <Stack textAlign="center" my="2rem" mx="1rem" gap="1.5rem">
        <Stack>
          <ButtonGroup variant="secondary" spacing="4">
            <StockBrokerAuthentication />
          </ButtonGroup>
          <GoToQnAButton />
        </Stack>
        <Stack gap="1.5rem">
          <CustomHStack />
          <SocialAuthentication />
        </Stack>
        <CustomFooter />
      </Stack>
    </CustomContainer>
  );
}
