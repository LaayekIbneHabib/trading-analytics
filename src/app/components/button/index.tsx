import { Button } from "@chakra-ui/react";
import { BtnProps } from "@/app/types/interfaces";
import { useButtonState } from "@/app/hooks/button";
import { ToPast, ToPresentContinuous } from "@/app/components/text";

const Btn = ({ children, name, ...props }: BtnProps) => {
  const { isLoading, isDisabled, toggleButtonState } = useButtonState();

  const buttonStyles = {
    backgroundColor: "brand.primary",
    color: "#ffffff",
    _hover: {
      backgroundColor: "brand.hover",
    },
    ...props.sx,
  };

  return (
    <Button
      isLoading={isLoading}
      isDisabled={isDisabled}
      onClick={toggleButtonState}
      loadingText={<ToPresentContinuous text={name} />}
      colorScheme="teal"
      variant="outline"
      {...props}
      sx={buttonStyles}
    >
      {isDisabled && !isLoading ? <ToPast text={name} /> : name}
      {children}
    </Button>
  );
};

export default Btn;
