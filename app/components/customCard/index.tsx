// external
import { Stack, Text } from '@chakra-ui/react';
// internal
import CustomBorder from '../customBorder';

interface CustomCardProps {
  type: string;
  symbol: string;
  heading: string;
  label: string;
  value: number | number[];
  caption: string;
}

interface CombineCustomCardProps {
  data: CustomCardProps;
}

const CustomCard = ({ data }: CombineCustomCardProps) => {
  return (
    <CustomBorder sx={{ height: '100%' }}>
      <Stack
        flexDir="column"
        justifyContent="space-between"
        alignItems="left"
        width="100%"
        height="100%"
        p="1rem"
      >
        <Text fontWeight="700">{data.heading}</Text>
        <Text>{data.label}</Text>
        <Text fontSize="7rem" fontWeight="700" color="brand.primary">
          {data.value}
          {data.symbol}
        </Text>
        <Text>{data.caption}</Text>
      </Stack>
    </CustomBorder>
  );
};

export default CustomCard;
