// external
import { Text } from '@chakra-ui/react';
// internal
import theme from '../../../theme/theme';
import CustomLink from '../../../components/ui/customLink';

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
