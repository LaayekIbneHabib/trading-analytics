'use client';

// external
import {
  Flex,
  FlexProps,
  IconButton,
  useColorMode,
  useColorModeValue,
  HStack,
  Avatar,
  VStack,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaBell } from 'react-icons/fa';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { useSession } from 'next-auth/react';

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

let disableMenuBtn: any;

export const TopNav = ({ onOpen, ...rest }: MobileProps) => {
  const session = useSession();
  const { colorMode, toggleColorMode } = useColorMode();

  const profilePic = session?.data?.user?.image ? session?.data?.user?.image : '';
  const name = session?.data?.user?.name ? session?.data?.user?.name : '';

  return (
    <Flex
      onChange={disableMenuBtn}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: '2', md: '6' }}>
        <IconButton
          size="md"
          variant="outline"
          aria-label="open menu"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
        <Popover>
          <PopoverTrigger>
            <IconButton size="md" variant="outline" aria-label="open menu" icon={<FaBell />} />
          </PopoverTrigger>
          <PopoverContent mt={2}>
            <PopoverCloseButton />
            <PopoverHeader>Notifications</PopoverHeader>
            <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
          </PopoverContent>
        </Popover>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar size={'sm'} src={profilePic} />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
