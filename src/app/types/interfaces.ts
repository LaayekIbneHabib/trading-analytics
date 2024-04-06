import { FlexProps, BoxProps, ButtonProps, ImageProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface LogoProps {
  size: string;
}

export interface LinkItemProps {
  name: string;
  href: string;
  icon: IconType;
}

export interface TextProps {
  text: string;
}

export interface BtnProps extends ButtonProps {
  name: string;
}

export interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}
