// default
import React from 'react';
// external
import { Container } from '@chakra-ui/react';

interface CustomContainerProps {
  children: React.ReactNode;
}

const CustomContainer = ({ children }: CustomContainerProps) => {
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      {children}
    </Container>
  );
};

export default CustomContainer;
