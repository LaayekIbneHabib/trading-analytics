"use client";
import {
  Box,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Logo from "@/app/components/logo";
import Btn from "@/app/components/button";
import AuthBtnGroup from "@/app/components/other-login";

export default function Login() {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Flex justify="center">
            <Logo size="70" />
          </Flex>
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "lg" }}>
              Login to your account
            </Heading>
            <Text color="fg.muted">
              We will send an email with a login link
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@johndoehub.com"
                />
              </FormControl>
            </Stack>
            <HStack spacing="1">
              <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                Try again in{" "}
              </Text>
              <Text color="brand.primary" fontWeight="700">
                60s
              </Text>
            </HStack>
            <Stack spacing="6">
              <Link href="/overview" _hover={{ textDecor: "none" }}>
                <Btn name="Send" w="100%" />
              </Link>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <AuthBtnGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
