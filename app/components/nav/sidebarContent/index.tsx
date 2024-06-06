'use client';

// default
import { useEffect } from 'react';
// external
import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
//internal
import Logo from '@/app/(auth)/icons/logo';
import { NavItem } from '../navItems';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) onClose();
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose]);

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#ffffff', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      overflow="auto"
      pb="4"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Flex alignItems="center" gap="4">
          <Logo size="" />
          <Text fontSize="lg" fontWeight="bold">
            ...
          </Text>
        </Flex>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex flexDir="column" gap="1">
        <NavItem />
      </Flex>
    </Box>
  );
};
