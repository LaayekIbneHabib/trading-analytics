// external
import { Text } from '@chakra-ui/react';
// internal
import CustomLink from '../../../components/customLink';
import theme from '../../../theme/theme';

const CustomFooter = () => {
  return (
    <Text fontSize="sm" fontWeight="400">
      By proceeding, you agree to our{' '}
      <CustomLink href="" color={theme.colors.brand.primary}>
        terms and conditions.
      </CustomLink>
    </Text>
  );
};

export default CustomFooter;
