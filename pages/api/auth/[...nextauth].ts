import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
import prisma from '../../../lib/prisma';
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: 'ef1273a0b63bccbf88d2',
      clientSecret: process.env.NEXTAUTH_SECRET,
    })
  ]
});
