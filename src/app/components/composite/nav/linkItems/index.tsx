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
import { CgPerformance } from "react-icons/cg";

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
    name: "Performance",
    icon: CgPerformance,
    children: [
      {
        name: "Returns",
        href: "/performance/returns",
        icon: FiTrendingUp,
      },
      {
        name: "Risk to reward",
        href: "/performance/risk-to-reward",
        icon: GoDot,
      },
      {
        name: "Email setup",
        href: "/performance/email-setup",
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
