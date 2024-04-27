"use client";

// internal
import CustomButton from "../../../components/ui/customButton";
import { socials } from "../../../assets/images/icons";

const SigninWithASocialAccountButton = () => {
  const handleClick = (id: any) => {
    alert(id);
  };

  return (
    <>
      {socials.map((social) => (
        <CustomButton
          key={social.id}
          w="100%"
          px="1rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          leftIcon={social.icon}
          variant="outline"
          fontSize="sm"
          fontWeight="400"
          label={`Continue with ${social.name}`}
          isDisabled={social.status === "inactive" ? true : false}
          onClick={() => handleClick(social.id)}
        />
      ))}
    </>
  );
};

export default SigninWithASocialAccountButton;
