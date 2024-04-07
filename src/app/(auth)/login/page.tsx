import {
  Box,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Stack,
  Flex,
  Text,
} from "@chakra-ui/react";
import Logo from "@/app/components/logo";
import Btn from "@/app/components/button";
import Enter from "@/app/components/input";
import AuthBtnGroup from "@/app/components/other-login";
import Navigate from "@/app/components/link";

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
            <Stack>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Enter
                  id="email"
                  genre="email"
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
              <Navigate href="/overview">
                <Btn name="Send" genre="submit" w="100%" />
              </Navigate>
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
