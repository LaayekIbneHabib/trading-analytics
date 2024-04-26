"use client";

// internal
import CustomButton from "../../components/ui/customButton";
import { socialIcons } from "../../assets/images/icons";
// external
import { signIn } from "next-auth/react";

const SigninWithGoogleButton = () => {
  const handleSignIn = () => {
    signIn("google");
  };

  return (
    <CustomButton
      w="100%"
      px="1rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      leftIcon={socialIcons.icon}
      variant="outline"
      label="Continue with Google"
      fontSize="sm"
      fontWeight="400"
      onClick={handleSignIn}
    />
  );
};

export default SigninWithGoogleButton;
