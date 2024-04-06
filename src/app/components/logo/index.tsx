import { FaChartLine } from "react-icons/fa";
import theme from "@/app/theme/theme";
import { LogoProps } from "@/app/types/interfaces";

const Logo = ({ size }: LogoProps) => {
  const logoStyles = {
    width: size,
    height: size,
    color: theme.colors.brand.primary,
  };

  return <FaChartLine style={logoStyles} />;
};

export default Logo;
