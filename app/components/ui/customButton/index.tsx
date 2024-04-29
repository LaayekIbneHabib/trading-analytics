'use client';

// external
import { Button, ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
  label: string;
  type: 'button' | 'reset' | 'submit';
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const CustomButton = ({ onClick, label, children, ...props }: CustomButtonProps) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
      {label}
    </Button>
  );
};

export default CustomButton;
