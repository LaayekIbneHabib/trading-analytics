"use client";
import { Button } from "@chakra-ui/react";
import { BtnProps } from "@/app/types/interfaces";
import { useButtonState } from "@/app/hooks/button";
import { ToPast, ToPresentContinuous } from "@/app/components/text";

const Btn = ({ children, name, genre, ...props }: BtnProps) => {
  const { isLoading, isDisabled, toggleButtonState } = useButtonState();

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
        loadingText={<ToPresentContinuous text={name} />}
        colorScheme="brand.primary"
        variant="outline"
        {...props}
        sx={buttonStyles}
      >
        {isDisabled && !isLoading ? <ToPast text={name} /> : name}
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
