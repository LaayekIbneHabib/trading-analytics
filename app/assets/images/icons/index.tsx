// internal
import Upstox from "./upstox";
import Kite from "./kite";
import AngelOne from "./angelOne";
import Google from "./google";

export const stockBrokers = [
  { id: "upstox", status: "active", name: "Upstox", icon: <Upstox /> },
  { id: "kite", status: "inactive", name: "coming soon", icon: <Kite /> },
  {
    id: "angel-one",
    status: "inactive",
    name: "coming soon",
    icon: <AngelOne />,
  },
];

export const socials = [
  {
    id: "google",
    status: "active",
    name: "Google",
    icon: <Google />,
  },
];
