// default
import Link from 'next/link';
import { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
  return (
    <Link {...props} href={href} style={{ textDecoration: 'none' }}>
      {children}
    </Link>
  );
};

export default CustomLink;
