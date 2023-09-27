import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { User } from '@prisma/client';
import { axiosInstance } from '@/lib/axios';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email:', type: 'text', placeholder: 'some.email@gmail.com' },
        password: { label: 'Password:', type: 'password', placeholder: 'jsmith' },
      },
      async authorize(credentials) {
        const response = await axiosInstance.post('/api/login', {
          email: credentials?.email,
          password: credentials?.password,
        });

        const user = response.data;

        if (user) return user;
        else return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session: ({ session, token }) => {
      console.log('Session callback ' + { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    jwt: async ({ token, user }) => {
      console.log('JWT Callback ' + { token, user });

      if (user) {
        const u = user as unknown as User;

        return {
          ...token,
          id: u.id,
        };
      }

      return token;
    },
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/auth/error',
  },
};
