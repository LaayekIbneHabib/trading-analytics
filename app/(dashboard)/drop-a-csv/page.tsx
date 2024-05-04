import { Box, Button } from '@chakra-ui/react';
import { auth, signOut } from '@/auth';
import FileUpload from '@/app/components/fileUpload';
import Image from 'next/image';

const StaticAnalysis = async () => {
  const session = await auth();

  return (
    <Box>
      {session?.user ? (
        <div>
          {session?.user?.name && session?.user?.image && (
            <>
              {session?.user?.name}
              <Image
                priority
                src={session?.user?.image}
                width="100"
                height="100"
                alt={session?.user?.name}
              />
            </>
          )}
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button type="submit">Sign out</Button>
          </form>
        </div>
      ) : (
        'Please sign in'
      )}
      <FileUpload />
    </Box>
  );
};

export default StaticAnalysis;
