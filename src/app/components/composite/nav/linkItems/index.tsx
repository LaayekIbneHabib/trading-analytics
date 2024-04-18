// external
import { IconType } from "react-icons";
import { GoDot } from "react-icons/go";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

interface LinkItemTypes {
  name: string;
  href?: string;
  icon?: IconType;
  children?: LinkItemTypes[];
}

export const LinkItems: LinkItemTypes[] = [
  {
    name: "Overview",
    href: "/overview",
    icon: FiHome,
  },
  {
    name: "Trending",
    icon: FiTrendingUp,
    children: [
      {
        name: "Viral",
        href: "/trending/viral",
        icon: GoDot,
      },
      {
        name: "Content marketing",
        href: "/trending/content-marketing",
        icon: GoDot,
      },
      {
        name: "Email setup",
        href: "/trending/email-setup",
        icon: GoDot,
      },
    ],
  },
  {
    name: "Explore",
    href: "/explore",
    icon: FiCompass,
  },
  {
    name: "Favourites",
    href: "/favourites",
    icon: FiStar,
  },
  {
    name: "Settings",
    icon: FiSettings,
    children: [
      {
        name: "Static Analysis",
        href: "/settings/static-analysis",
        icon: GoDot,
      },
    ],
  },
];
