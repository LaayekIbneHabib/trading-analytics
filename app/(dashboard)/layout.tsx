// external
import { Container } from '@chakra-ui/react';
// internal
import Wrapper from '../components/nav/wrapper';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Container maxW="container.xl">{children}</Container>
    </Wrapper>
  );
}
