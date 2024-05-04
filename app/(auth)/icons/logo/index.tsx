// external
import { Box } from '@chakra-ui/react';
import { IoIosAnalytics } from 'react-icons/io';
// internal
import theme from '../../../theme/theme';

type LogoProps = {
  size: string;
};

const Logo = ({ size }: LogoProps) => {
  return (
    <Box bg="rgba(93, 135, 255, 0.1)" borderRadius="50%">
      <IoIosAnalytics size={size} color={theme.colors.brand.primary} />
    </Box>
  );
};

export default Logo;
