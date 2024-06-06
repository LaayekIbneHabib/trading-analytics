'use client';

// default
import { usePathname } from 'next/navigation';
// external
import { Flex, Icon } from '@chakra-ui/react';
// internal
import CustomLink from '@/app/components/customLink';
import theme from '@/app/theme/theme';

interface SubnavItemsProps {
  items: any[];
}

const SubnavItems = ({ items }: SubnavItemsProps) => {
  const pathname = usePathname();
  return (
    <>
      {items.map((item: any, index: number) => (
        <CustomLink href={item.href} key={index}>
          <Flex
            px="4"
            py="3"
            mx="4"
            align="center"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            color={pathname === item.href ? theme.colors.brand.primary : ''}
            _hover={{ color: theme.colors.brand.primary }}
          >
            {<Icon mr="4" as={item.icon} />}
            {item.name}
          </Flex>
        </CustomLink>
      ))}
    </>
  );
};

export default SubnavItems;
