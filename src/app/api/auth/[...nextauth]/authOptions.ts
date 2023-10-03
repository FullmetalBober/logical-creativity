import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { User } from '@prisma/client';
import { prisma } from '@/lib/db';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email:', type: 'text', required: true },
        password: { label: 'Password:', type: 'password', required: true },
      },
      async authorize(credentials) {
        console.log('authorize function called!');
        if (!credentials) return null;

        const { email, password } = credentials;

        try {
          const user = await prisma.user.findFirst({
            where: {
              email: email,
            },
          });

          if (!user) {
            throw new Error('User not found. Check your email.');
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);

          if (!isPasswordValid) {
            throw new Error('Invalid password.');
          }

          return {
            id: user.id.toString(),
            email: user.email,
            role: user.role,
            fullName: user.fullName,
            image: user.image,
          };
        } catch (e) {
          console.log('Error: ', e);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session: ({ session, token }) => {
      console.log('session callback called!');
      if (session?.user) session.user.role = token.role;

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    jwt: async ({ token, user }) => {
      console.log('jwt callback called!');
      if (user) {
        token.role = user.role;

        const u = user as unknown as User;

        return {
          ...token,
          id: u.id,
        };
      }

      return token;
    },
    //   signIn: async ({ user, account, profile }) => {
    //     if (account?.provider === 'credentials') return true;
    //
    //     try {
    //       console.log(user);
    //       console.log(account);
    //       console.log(profile);
    //
    //       if (!profile?.email || !profile?.name || !profile?.image) return false;
    //
    //       const isUserExist = await prisma.user.findFirst({
    //         where: {
    //           email: profile?.email,
    //         },
    //       });
    //
    //       if (isUserExist) return false;
    //
    //       // if (!isUserExist)
    //       //   await prisma.user.create({
    //       //     data: {
    //       //       email: profile.email,
    //       //       fullName: profile.name,
    //       //       image: profile.image,
    //       //       password: "",
    //       //     },
    //       //   });
    //
    //       return true;
    //     } catch (error) {
    //       console.log('Error: ', error);
    //       return false;
    //     }
    //   },
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/auth/error',
  },
};
