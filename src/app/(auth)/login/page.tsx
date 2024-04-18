// default
import React from "react";
// internal
import theme from "@/app/theme/theme";
import Logo from "@/app/components/ui/logo";
import Navigate from "@/app/components/ui/navigate";
import { brokerIcons, socialIcons } from "@/app/(auth)/assets/icons";
// external
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Flex,
  Text,
  Button,
  ButtonGroup,
  Badge,
} from "@chakra-ui/react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";

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
            <Logo size="5rem" />
          </Flex>
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "md" }}>
              Login with your broker
            </Heading>
            <Text color="bg.muted">...</Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "8", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "xs" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack textAlign="center" spacing="6">
            <Stack>
              <ButtonGroup variant="secondary" spacing="4">
                {brokerIcons.map((brokerIcon) => (
                  <Button
                    key={brokerIcon.id}
                    h="5rem"
                    w="100%"
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="0.75rem"
                    p={4}
                    flexGrow={1}
                    variant="outline"
                    isDisabled={brokerIcon.status === "inactive" ? true : false}
                  >
                    {brokerIcon.icon}
                    <Text fontSize="xs" fontWeight="400">
                      {brokerIcon.name}
                    </Text>
                  </Button>
                ))}
              </ButtonGroup>
              <Button
                mt={2}
                variant="outline"
                pt={8}
                pb={8}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="1rem"
              >
                <Flex alignItems="center" gap="1rem">
                  <Box p={2} borderRadius="50%" bg="rgba(93, 135, 255, 0.1)">
                    <IoShieldCheckmarkOutline
                      style={{ color: "#5D87FF" }}
                      size="2rem"
                    />
                  </Box>
                  <Flex flexDir="column" textAlign="left" gap=".25rem">
                    <Text
                      color={theme.colors.brand.primary}
                      fontSize="sm"
                      fontWeight="700"
                    >
                      Is it safe to login with my broker?
                    </Text>
                    <Text color="bg.muted" fontSize="sm" fontWeight="400">
                      Frequently asked questions
                    </Text>
                  </Flex>
                </Flex>
                <Box>
                  <FaArrowRightFromBracket />
                </Box>
              </Button>
            </Stack>
            <Stack spacing="5">
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  Don&apos;t have a broker account?
                </Text>
                <Divider />
              </HStack>
              <ButtonGroup variant="secondary" spacing="4">
                {socialIcons.map((socialIcon) => (
                  <Button
                    key={socialIcon.id}
                    w="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    leftIcon={socialIcon.icon}
                    variant="outline"
                  >
                    <Navigate href="/overview">
                      <Text fontSize="sm" fontWeight="400">
                        {socialIcon.name}
                      </Text>
                    </Navigate>
                  </Button>
                ))}
              </ButtonGroup>
            </Stack>
            <Text fontSize="sm" fontWeight="400">
              By proceeding, you agree to the{" "}
              <span style={{ color: theme.colors.brand.primary }}>
                terms and conditions.
              </span>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
