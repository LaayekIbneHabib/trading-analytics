'use client';

// external
import { Box, Button } from '@chakra-ui/react';
// internal
import { stockBrokers } from '@/app/(auth)/icons';

const styles = {
  w: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  variant: 'outline',
  fontWeight: '400',
};

const clientId = process.env.AUTH_UPSTOX_API_KEY;
const redirectUri = process.env.AUTH_REDIRECT_URI;

const StockBrokerAuth = () => {
  const handleClick = (id: string) => {
    if (id == 'upstox') {
      const params = `response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
      const baseUrl = `https://api.upstox.com/v2/login/authorization/dialog?${params}`;
      location.href = baseUrl;
    }
  };

  return (
    <>
      {stockBrokers.map(stockBroker => (
        <Button
          key={stockBroker.id}
          onClick={() => handleClick(stockBroker.id)}
          type="button"
          h="5rem"
          flexDir="column"
          gap="0.75rem"
          flexGrow="1rem"
          p="2rem"
          fontSize="xs"
          {...styles}
          isDisabled={stockBroker.status === 'inactive' ? true : false}
        >
          <Box w="1.5rem">{stockBroker.icon}</Box>
          {stockBroker.label}
        </Button>
      ))}
    </>
  );
};

export default StockBrokerAuth;
