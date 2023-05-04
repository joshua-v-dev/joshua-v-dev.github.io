import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    session({ session, token, user }) {
      session.user.address = "123 Fake St.";
      token.sub = "1234567890";

      user.id = "123";

      return session;
    },
  },
});
