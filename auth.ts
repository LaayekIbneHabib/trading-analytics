// default
import NextAuth from 'next-auth';
// external
import Google from 'next-auth/providers/google';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
});
