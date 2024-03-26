"use client";
import { Link } from "@chakra-ui/next-js";
import { useToast, Button } from "@chakra-ui/react";

export default function Page() {
  const toast = useToast();

  return (
    <>
      <Link href="/auth/login" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    </>
  );
}
