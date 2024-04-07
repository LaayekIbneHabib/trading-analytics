"use client";
import { Input, InputProps } from "@chakra-ui/react";

interface EnterProps extends InputProps {
  id: string;
  genre: string;
  placeholder: string;
}

const Enter = ({ id, genre, placeholder, ...props }: EnterProps) => {
  return <Input id={id} type={genre} placeholder={placeholder} {...props} />;
};

export default Enter;
