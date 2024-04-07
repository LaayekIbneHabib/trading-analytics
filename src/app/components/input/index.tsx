"use client";
import { Input } from "@chakra-ui/react";
import { EnterProps } from "@/app/types/interfaces";

const Enter = ({ id, genre, placeholder, ...props }: EnterProps) => {
  return <Input id={id} type={genre} placeholder={placeholder} {...props} />;
};

export default Enter;
