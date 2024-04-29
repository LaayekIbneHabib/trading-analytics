import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface CustomBoxProps extends BoxProps {
  children: React.ReactNode;
}

const CustomBox = ({ children }: CustomBoxProps) => {
  return (
    <Box
      py={{
        base: '8',
        sm: '8',
      }}
      px={{
        base: '4',
        sm: '10',
      }}
      bg={{
        base: 'transparent',
        sm: 'bg.surface',
      }}
      boxShadow={{
        base: 'none',
        sm: 'xs',
      }}
      borderRadius={{
        base: 'none',
        sm: 'xl',
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
