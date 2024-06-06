// external
import { Stack, ButtonGroup } from '@chakra-ui/react';
// internal
import StockBrokerAuth from '../components/authButtons/stockBrokerAuth';
import SocialAuth from '../components/authButtons/socialAuth';
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
            <StockBrokerAuth />
          </ButtonGroup>
          <GoToQnAButton />
        </Stack>
        <Stack gap="1.5rem">
          <CustomHStack />
          <SocialAuth />
        </Stack>
        <CustomFooter />
      </Stack>
    </CustomContainer>
  );
}
