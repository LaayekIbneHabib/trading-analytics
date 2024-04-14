import Upstox from "@/app/(auth)/assets/icons/upstox";
import Kite from "@/app/(auth)/assets/icons/kite";
import AngelOne from "@/app/(auth)/assets/icons/angelOne";
import Google from "@/app/(auth)/assets/icons/google";
import Apple from "@/app/(auth)/assets/icons/apple";

export const brokerIcons = [
  { id: 1, status: "active", name: "Upstox", icon: <Upstox /> },
  { id: 2, status: "inactive", name: "coming soon", icon: <Kite /> },
  { id: 3, status: "inactive", name: "coming soon", icon: <AngelOne /> },
];

export const socialIcons = [
  { id: 1, status: "active", name: "Google", icon: <Google /> },
  { id: 2, status: "active", name: "Apple", icon: <Apple /> },
];
