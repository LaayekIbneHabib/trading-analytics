"use client";
import { Link } from "@chakra-ui/next-js";
import { NavigateProps } from "@/app/types/interfaces";

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
