import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/auth0";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: 'ef1273a0b63bccbf88d2',
      clientSecret: '62e9bf2b6bb05367016b92ddf2acb04d5d3a7c13',
    })
  ]
});
