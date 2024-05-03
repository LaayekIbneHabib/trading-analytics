// external
import Link from 'next/link';
import { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
  color: string;
  href: string;
  children: React.ReactNode;
}

const CustomLink = ({ color, href, children, ...props }: CustomLinkProps) => {
  return (
    <Link {...props} href={href} style={{ textDecoration: 'none', color: color }}>
      {children}
    </Link>
  );
};

export default CustomLink;
