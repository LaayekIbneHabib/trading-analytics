// internal
import Upstox from "@/app/assets/images/icons/upstox";
import Kite from "@/app/assets/images/icons/kite";
import AngelOne from "@/app/assets/images/icons/angelOne";
import Google from "@/app/assets/images/icons/google";
import Apple from "@/app/assets/images/icons/apple";

export const brokerIcons = [
  { status: "active", name: "Upstox", icon: <Upstox /> },
  { status: "inactive", name: "coming soon", icon: <Kite /> },
  { status: "inactive", name: "coming soon", icon: <AngelOne /> },
];

export const socialIcons = [
  { status: "active", name: "Google", icon: <Google /> },
  { status: "active", name: "Apple", icon: <Apple /> },
];
