"use client";

import {
  Box,
  Button,
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
import Logo from "@/components/ui/logo";
import AuthBtnGroup from "../components/ui/auth-btn-group/authBtnGroup";
import Link from "next/link";

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
            <Logo size="70" color="teal" />
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
            <HStack justify="space-between">
              <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                We have sent an email with a login link
              </Text>
              <Text color="teal" fontWeight="medium">
                60s
              </Text>
            </HStack>
            <Stack spacing="6">
              <Button colorScheme="teal">
                <Link href="/overview">Send</Link>
              </Button>
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
