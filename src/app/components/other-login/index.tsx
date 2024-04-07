"use client";
import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";

import googleIcon from "./assets/google.svg";
import appleIcon from "./assets/apple.svg";
import facebookIcon from "./assets/facebook.svg";

const providers = [
  { name: "Google", icon: googleIcon.src },
  { name: "Apple", icon: appleIcon.src },
  { name: "Facebook", icon: facebookIcon.src },
];

const OtherLogin = () => (
  <ButtonGroup variant="secondary" spacing="4">
    {providers.map((provider) => (
      <Button key={provider.name} flexGrow={1} variant="outline">
        <VisuallyHidden>Sign in with {provider.name}</VisuallyHidden>
        <img width="17.5rem" src={provider.icon} alt={provider.name} />
      </Button>
    ))}
  </ButtonGroup>
);

export default OtherLogin;
