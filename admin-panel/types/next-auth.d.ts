import NextAuth, { DefaultSession } from 'next-auth';
import { IAdminLoginInfo } from '@/interfaces/data-type';

declare module 'next-auth' {
  interface Session {
    user: IAdminLoginInfo & { role: string };
  }
}
