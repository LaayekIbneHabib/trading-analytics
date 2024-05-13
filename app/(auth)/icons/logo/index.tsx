// external
import { Box } from '@chakra-ui/react';
import { IoIosAnalytics } from 'react-icons/io';

type LogoProps = {
  size: string;
};

const Logo = ({ size }: LogoProps) => {
  return (
    <Box bg="rgba(93, 135, 255, 0.1)" borderRadius="50%">
      <IoIosAnalytics size={size} />
    </Box>
  );
};

export default Logo;
