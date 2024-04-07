import { FaChartLine } from "react-icons/fa";
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

  return <FaChartLine style={logoStyles} />;
};

export default Logo;
