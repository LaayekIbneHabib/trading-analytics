"use client";

// external
import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  onClick: React.MouseEventHandler;
  label: string;
}

const CustomButton = ({ onClick, label, ...props }: CustomButtonProps) => {
  return (
    <Button onClick={onClick} {...props}>
      {label}
    </Button>
  );
};

export default CustomButton;
