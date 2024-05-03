// external
import Link from 'next/link';
import { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  color?: string;
}

const CustomLink = ({ href, children, color, ...props }: CustomLinkProps) => {
  return (
    <Link {...props} href={href} style={{ textDecoration: 'none', color: color }}>
      {children}
    </Link>
  );
};

export default CustomLink;
