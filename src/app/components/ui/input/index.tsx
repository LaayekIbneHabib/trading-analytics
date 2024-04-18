"use client";

// external
import { Input, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {
  id: string;
  genre: string;
  name: string;
  placeholder: string;
}

const CustomInput = ({
  id,
  genre,
  name,
  placeholder,
  ...props
}: CustomInputProps) => {
  return (
    <Input
      id={id}
      type={genre}
      name={name}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default CustomInputProps;
