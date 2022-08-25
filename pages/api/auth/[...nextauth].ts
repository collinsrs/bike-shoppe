import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/auth0";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.NEXTAUTH_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
    })
  ]
});
