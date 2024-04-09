import { FiTrendingUp } from "react-icons/fi";
import theme from "@/app/theme/theme";

interface LogoProps {
  size: string;
}

const Logo = ({ size }: LogoProps) => {
  const logoStyles = {
    width: size,
    height: size,
    color: theme.colors.brand.primary,
  };

  return <FiTrendingUp style={logoStyles} />;
};

export default Logo;
