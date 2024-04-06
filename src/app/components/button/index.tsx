import { Button, useTheme } from "@chakra-ui/react";
import { BtnProps } from "@/app/types/interfaces";
import { useButtonState } from "@/app/hooks/button";
import { ToPast, ToPresentContinuous } from "@/app/components/tense";

const Btn = ({ children, name, type, ...props }: BtnProps) => {
  const theme = useTheme();
  const { isLoading, isDisabled, toggleButtonState } = useButtonState();

  const buttonStyles = {
    backgroundColor: theme.colors.teal[500],
    color: "white",
    _hover: {
      backgroundColor: theme.colors.teal[600],
    },
    ...props.sx,
  };

  return (
    <Button
      isLoading={isLoading}
      isDisabled={isDisabled}
      onClick={toggleButtonState}
      loadingText={<ToPresentContinuous word={name} />}
      colorScheme="teal"
      variant="outline"
      {...props}
      sx={buttonStyles}
    >
      {isDisabled && !isLoading ? <ToPast word={name} /> : name}
      {children}
    </Button>
  );
};

export default Btn;
