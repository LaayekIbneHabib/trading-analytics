"use client";

// external
import { Button, ButtonProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface BtnProps extends ButtonProps {
  name: string;
  type: "button" | "submit" | "reset";
  variant: "solid" | "outline" | "ghost" | "link";
  isLoading: boolean;
  icon?: IconType;
}

const CustomButton = ({ name, ...props }: BtnProps) => {
  const buttonStyles = {
    backgroundColor: "brand.primary",
    color: "#ffffff",
    border: "none",
    _hover: {
      backgroundColor: "brand.hover",
    },
    ...props.sx,
  };

  return (
    <Button {...props} sx={buttonStyles}>
      {name}
    </Button>
  );
};

export default CustomButton;
