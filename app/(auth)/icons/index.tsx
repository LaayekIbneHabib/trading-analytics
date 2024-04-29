// internal
import Upstox from './upstox';
import Kite from './kite';
import AngelOne from './angelOne';
import Google from './google';

export const stockBrokers = [
  { id: 'upstox', status: 'active', label: 'Upstox', icon: <Upstox /> },
  { id: 'kite', status: 'inactive', label: 'coming soon', icon: <Kite /> },
  { id: 'angel-one', status: 'inactive', label: 'coming soon', icon: <AngelOne /> },
];

export const socialPlatforms = [
  { id: 'google', status: 'active', label: 'Google', icon: <Google /> },
];
