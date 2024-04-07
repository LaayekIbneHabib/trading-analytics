"use client";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useButtonState } from "@/app/hooks/button";
import { useTenses } from "@/app/hooks/tenses";

interface BtnProps extends ButtonProps {
  name: string;
  genre: string;
}

const Btn = ({ children, name, genre, ...props }: BtnProps) => {
  const { isLoading, isDisabled, toggleButtonState } = useButtonState();
  const { ToPresentContinuous, ToPast } = useTenses({ text: name });

  const buttonStyles = {
    backgroundColor: "brand.primary",
    color: "#ffffff",
    border: "none",
    _hover: {
      backgroundColor: "brand.hover",
    },
    ...props.sx,
  };

  if (genre === "submit") {
    return (
      <Button
        isLoading={isLoading}
        isDisabled={isDisabled}
        onClick={toggleButtonState}
        loadingText={ToPresentContinuous()}
        colorScheme="brand.primary"
        variant="outline"
        {...props}
        sx={buttonStyles}
      >
        {isDisabled && !isLoading ? ToPast() : name}
        {children}
      </Button>
    );
  }

  return (
    <Button
      colorScheme="brand.primary"
      variant="outline"
      {...props}
      sx={buttonStyles}
    >
      {name}
      {children}
    </Button>
  );
};

export default Btn;
