// external
import { Stack, Text, useColorMode } from '@chakra-ui/react';
// internal
import theme from '../../../theme/theme';

interface CustomCardProps {
  type: string;
  symbol: string;
  heading: string;
  label: string;
  value: number | number[];
  caption: string;
}

interface RestoreCustomCardProps {
  data: CustomCardProps;
}

const CustomCard = ({ data }: RestoreCustomCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      flexDir="column"
      justifyContent="space-between"
      alignItems="left"
      width="100%"
      height="100%"
      p="1rem"
      borderRadius="1rem"
      style={{
        backgroundColor: colorMode === 'light' ? '#ffffff' : theme.colors.brand.light,
      }}
    >
      <Text fontWeight="700">{data.heading}</Text>
      <Text>{data.label}</Text>
      <Text fontSize="7rem" fontWeight="700" color="brand.primary">
        {data.value}
        {data.symbol}
      </Text>
      <Text>{data.caption}</Text>
    </Stack>
  );
};

export default CustomCard;
