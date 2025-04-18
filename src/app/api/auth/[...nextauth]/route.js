const NextAuth = require("next-auth").default;
const GoogleProvider = require("next-auth/providers/google").default;

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signin: "/login",
  },

  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub; // Add user ID to session
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Needed for JWT encryption
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
