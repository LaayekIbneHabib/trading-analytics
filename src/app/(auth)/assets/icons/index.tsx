import Upstox from "@/app/(auth)/assets/icons/upstox";
import Kite from "@/app/(auth)/assets/icons/kite";
import AngelOne from "@/app/(auth)/assets/icons/angelOne";
import Google from "@/app/(auth)/assets/icons/google";
import Apple from "@/app/(auth)/assets/icons/apple";

export const brokerIcons = [
  { status: "active", name: "Upstox", icon: <Upstox /> },
  { status: "inactive", name: "coming soon", icon: <Kite /> },
  { status: "inactive", name: "coming soon", icon: <AngelOne /> },
];

export const socialIcons = [
  { status: "active", name: "Google", icon: <Google /> },
  { status: "active", name: "Apple", icon: <Apple /> },
];
