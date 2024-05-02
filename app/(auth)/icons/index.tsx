// default
import { ReactElement } from 'react';
// internal
import Upstox from './upstox';
import Kite from './kite';
import AngelOne from './angelOne';
import Google from './google';

interface StockBrokerProps {
  id: string;
  status: 'active' | 'inactive';
  label: string;
  icon: ReactElement;
}

export const stockBrokers: StockBrokerProps[] = [
  { id: 'upstox', status: 'active', label: 'Upstox', icon: <Upstox /> },
  { id: 'kite', status: 'inactive', label: 'coming soon', icon: <Kite /> },
  { id: 'angel-one', status: 'inactive', label: 'coming soon', icon: <AngelOne /> },
];

interface SocialPlatformsProps {
  id: string;
  status: 'active' | 'inactive';
  label: string;
  icon: ReactElement;
}

export const socialPlatforms: SocialPlatformsProps[] = [
  { id: 'google', status: 'active', label: 'Google', icon: <Google /> },
];
