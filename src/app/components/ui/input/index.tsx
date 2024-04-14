"use client";
import { Input, InputProps } from "@chakra-ui/react";

interface EnterProps extends InputProps {
  id: string;
  genre: string;
  name: string;
  placeholder: string;
}

const Enter = ({ id, genre, name, placeholder, ...props }: EnterProps) => {
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

export default Enter;
