'use client';

// external
import { Link, LinkProps } from '@chakra-ui/next-js';

interface CustomLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink = ({ children, href, ...props }: CustomLinkProps) => {
  const styles = {
    _hover: { textDecor: 'none' },
  };
  return (
    <Link href={href} {...props} sx={styles}>
      {children}
    </Link>
  );
};

export default CustomLink;
