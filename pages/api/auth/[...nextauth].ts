import NextAuth from 'next-auth';
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: 'A8MUM7f4Ds0lU93RqUDA3OgdTabWTcAH',
      clientSecret: 'tG3dGVnnPf3U2mfmoBiQJFr5GXRmIS_4YghsavYYpbB_MsYyi2W5nAq0s3oQLL5P',
      issuer: 'dev-4o4acxx0.us.auth0.com'
    })
  ]
});
