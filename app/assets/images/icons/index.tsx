// internal
import Upstox from "./upstox";
import Kite from "./kite";
import AngelOne from "./angelOne";
import Google from "./google";

export const brokerIcons = [
  { status: "active", name: "Upstox", icon: <Upstox /> },
  { status: "inactive", name: "coming soon", icon: <Kite /> },
  { status: "inactive", name: "coming soon", icon: <AngelOne /> },
];

export const socialIcons = {
  status: "active",
  name: "Google",
  icon: <Google />,
};
