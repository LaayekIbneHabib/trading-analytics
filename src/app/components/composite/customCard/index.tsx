// external
import { Box, Text, useColorMode } from "@chakra-ui/react";

interface CustomCardProps {
  type: string;
  heading: string;
  label: string;
  value: number;
  caption: string;
}

interface ReturnCustomCardProps {
  data: CustomCardProps;
}

const CustomCard = ({ data }: ReturnCustomCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "left",
        backgroundColor:
          colorMode === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.1)",
        width: "100%",
        height: "100%",
        padding: "1rem",
      }}
    >
      <Text as="h2" fontWeight="700">
        {data.heading}
      </Text>
      <Text>{data.label}</Text>
      <Text fontSize="7rem" fontWeight="700" color="brand.primary">
        {data.value}
        {data.type === "percentage" ? "%" : ""}
      </Text>
      <Text>{data.caption}</Text>
    </Box>
  );
};

export default CustomCard;
