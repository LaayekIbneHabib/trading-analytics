// default
import React from 'react';
// external
import { Box, useColorModeValue } from '@chakra-ui/react';

interface CustomBorderProps {
  sx?: React.CSSProperties;
  children: React.ReactNode;
}

const CustomBorder = ({ children, ...props }: CustomBorderProps) => {
  return (
    <Box
      {...props}
      border="1px"
      borderRadius="1rem"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      {children}
    </Box>
  );
};

export default CustomBorder;
