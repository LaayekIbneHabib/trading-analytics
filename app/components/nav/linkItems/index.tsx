// external
import { IconType } from 'react-icons';
import {
  FaStar,
  FaChartArea,
  FaChartPie,
  FaFileUpload,
  FaQuestionCircle,
  FaEnvelope,
  FaMoneyBill,
} from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { MdManageAccounts } from 'react-icons/md';

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
    icon: FaStar,
  },
  {
    name: 'Returns',
    href: '/returns',
    icon: FaChartArea,
  },
  {
    name: 'Risk to reward',
    href: '/risk-to-reward',
    icon: FaChartPie,
  },
  {
    name: 'Upload a .csv',
    href: '/drop-a-csv',
    icon: FaFileUpload,
  },
  {
    name: 'QnA',
    href: '/',
    icon: FaQuestionCircle,
  },
  {
    name: 'Contact support',
    href: '/',
    icon: FaEnvelope,
  },
  {
    name: 'Settings',
    icon: FaGear,
    children: [
      {
        name: 'Account',
        href: '/settings/account',
        icon: MdManageAccounts,
      },
      {
        name: 'Billing',
        href: '/settings/billing',
        icon: FaMoneyBill,
      },
    ],
  },
];
