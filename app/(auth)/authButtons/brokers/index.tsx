"use client";

// internal
import CustomButton from "../../../components/ui/customButton";
import { stockBrokers } from "../../../assets/images/icons";

const SigninWithAStockBrokerButton = () => {
  const handleClick = (id: any) => {
    alert(id);
  };

  return (
    <>
      {stockBrokers.map((stockBroker) => (
        <CustomButton
          key={stockBroker.id}
          h="5rem"
          w="100%"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          gap="0.75rem"
          p={4}
          flexGrow={1}
          fontSize="xs"
          fontWeight="400"
          variant="outline"
          label={stockBroker.name}
          isDisabled={stockBroker.status === "inactive" ? true : false}
          onClick={() => handleClick(stockBroker.id)}
        >
          {stockBroker.icon}
        </CustomButton>
      ))}
    </>
  );
};

export default SigninWithAStockBrokerButton;
