"use client";
import { Link, LinkProps } from "@chakra-ui/next-js";

interface NavigateProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

const Navigate = ({ children, href, ...props }: NavigateProps) => {
  const navigateStyles = {
    _hover: { textDecor: "none" },
  };
  return (
    <Link href={href} {...props} sx={navigateStyles}>
      {children}
    </Link>
  );
};

export default Navigate;
