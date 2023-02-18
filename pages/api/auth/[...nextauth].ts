import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from '../../../lib/prisma';
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export var isAdmin: boolean = false;

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: 'ef1273a0b63bccbf88d2',
      clientSecret: process.env.NEXTAUTH_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_NEXTAUTH_SECRET,
    })
  ],
  callbacks: {
     async session({session, token, user}) {
      session.user.id = user.id;
      session.user.role = user.role;
      if (user.role === "ADMIN") {
        isAdmin = true;
      }
      session.user.adminAccessToken = user.adminAccessToken;
      return session;
     }
  }
});

