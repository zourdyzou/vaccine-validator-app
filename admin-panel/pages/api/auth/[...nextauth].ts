import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

import { authApi } from '../../../api-axios/authApi';
import { NextApiHandler } from 'next';
import { IAdminLoginInfo } from '@/interfaces/data-type';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        const adminResponse = (await authApi.login({
          username,
          password,
        })) as unknown as IAdminLoginInfo;

        if (adminResponse) {
          return { ...adminResponse, role: 'admin' };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },

  secret: process.env.NEXT_PUBLIC_SECRET,

  callbacks: {
    async session({ session, token }) {
      (session.user as any) = token.user;
      axios.defaults.headers.common.Authorization = `Bearer ${
        (token.user as any).token
      }`;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, authOptions);

export default authHandler;
