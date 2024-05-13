// external
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

const CustomFooter = () => {
  return (
    <Text fontSize="sm" fontWeight="400">
      By proceeding, you agree to our <Link href="">terms and conditions.</Link>
    </Text>
  );
};

export default CustomFooter;
