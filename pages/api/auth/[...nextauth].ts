import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: 'ef1273a0b63bccbf88d2',
      clientSecret: '67a2e4ed028ce5de84f832427439a8bde79ae4d2',
    })
  ]
});
