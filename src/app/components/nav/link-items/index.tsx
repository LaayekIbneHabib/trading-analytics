import { LinkItemProps } from "@/app/types/interfaces";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

export const LinkItems: Array<LinkItemProps> = [
  { name: "Overview", href: "/overview", icon: FiHome },
  { name: "Trending", href: "/treding", icon: FiTrendingUp },
  { name: "Explore", href: "/explore", icon: FiCompass },
  { name: "Favourites", href: "/favourites", icon: FiStar },
  { name: "Settings", href: "/settings", icon: FiSettings },
];
