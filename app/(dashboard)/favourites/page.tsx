'use client';

// default
import { useEffect } from 'react';
// internal
import Board from '@/app/components/kanban/board';
import { upstoxAuth } from '@/app/lib/actions';

const Favourites = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    upstoxAuth(code!);
  }, []);

  return <Board />;
};

export default Favourites;
