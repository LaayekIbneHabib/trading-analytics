// import { FiTrendingUp } from "react-icons/fi";
import { IoIosAnalytics } from "react-icons/io";
import theme from "@/app/theme/theme";
import { Box } from "@chakra-ui/react";

interface LogoProps {
  size: string;
}

const Logo = ({ size }: LogoProps) => {
  const logoStyles = {
    width: size,
    height: size,
    color: theme.colors.brand.primary,
  };

  return (
    <Box bg="rgba(93, 135, 255, 0.1)" borderRadius="50%">
      <IoIosAnalytics style={logoStyles} />
    </Box>
  );
};

export default Logo;
