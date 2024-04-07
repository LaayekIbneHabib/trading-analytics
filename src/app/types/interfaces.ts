import {
  FlexProps,
  BoxProps,
  ButtonProps,
  InputProps,
  LinkProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface LogoProps {
  size: string;
}

interface LinkItemProps {
  name: string;
  href: string;
  icon: IconType;
}

interface TextProps {
  text: string;
}

interface BtnProps extends ButtonProps {
  name: string;
  genre: string;
}

interface EnterProps extends InputProps {
  id: string;
  genre: string;
  placeholder: string;
}

interface NavigateProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

export type {
  LogoProps,
  LinkItemProps,
  TextProps,
  BtnProps,
  EnterProps,
  SidebarProps,
  MobileProps,
  NavItemProps,
  NavigateProps,
};
