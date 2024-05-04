// external
import { IconType } from 'react-icons';
import { FaFileCsv, FaQuestionCircle } from 'react-icons/fa';
import { RiBillFill } from 'react-icons/ri';
import {
  MdOutlineStar,
  MdTrendingUp,
  MdWaterfallChart,
  MdEmail,
  MdSettings,
  MdManageAccounts,
} from 'react-icons/md';

interface LinkItemTypes {
  name: string;
  href?: string;
  icon?: IconType;
  children?: LinkItemTypes[];
}

export const LinkItems: LinkItemTypes[] = [
  {
    name: 'Favourites',
    href: '/favourites',
    icon: MdOutlineStar,
  },
  {
    name: 'Returns',
    href: '/returns',
    icon: MdTrendingUp,
  },
  {
    name: 'Risk to reward',
    href: '/risk-to-reward',
    icon: MdWaterfallChart,
  },
  {
    name: 'Drop a .csv',
    href: '/drop-a-csv',
    icon: FaFileCsv,
  },
  {
    name: 'QnA',
    href: '/',
    icon: FaQuestionCircle,
  },
  {
    name: 'Contact support',
    href: '/',
    icon: MdEmail,
  },
  {
    name: 'Settings',
    icon: MdSettings,
    children: [
      {
        name: 'Account',
        href: '/settings/account',
        icon: MdManageAccounts,
      },
      {
        name: 'Billing',
        href: '/settings/billing',
        icon: RiBillFill,
      },
    ],
  },
];
