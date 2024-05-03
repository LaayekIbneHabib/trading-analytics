'use client';

//default
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
// internal
import CustomLink from '../../../ui/customLink';
import { LinkItems as items } from '../linkItems';
import SubnavItems from './subnavItems';
// external
import { Flex, Icon } from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

export const NavItem = () => {
  const [isOpen, setOpen] = useState(null);
  const pathname = usePathname();

  const dynamicStyles = (item: any, index: number) => {
    const isActive = pathname === item.href || isOpen === index;
    const isHovered = pathname !== item.href && isOpen !== index;

    return {
      bgColor: isActive ? 'brand.primary' : 'transparent',
      color: isActive ? '#ffffff' : '',
      _hover: isHovered ? { bgColor: 'brand.light', color: 'brand.primary' } : null,
    };
  };

  const handleClick = (index: any) => {
    setOpen(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <CustomLink href={item.href ? item.href : ''}>
            <Flex
              pl={'4'}
              pt={'3'}
              pb={'3'}
              mx="4"
              justify="space-between"
              align="center"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              onClick={() => handleClick(index)}
              sx={dynamicStyles(item, index)}
            >
              <Flex align="center">
                {<Icon mr="4" fontSize="16" as={item.icon} />}
                {item.name}
              </Flex>
              {item.children && (
                <Flex mr="4">
                  {isOpen === index ? (
                    <IoIosArrowDown fontSize="16" />
                  ) : (
                    <IoIosArrowUp fontSize="16" />
                  )}
                </Flex>
              )}
            </Flex>
          </CustomLink>
          {item.children && isOpen === index && <SubnavItems items={item.children} />}
        </React.Fragment>
      ))}
    </>
  );
};
