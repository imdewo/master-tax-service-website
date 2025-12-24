import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Client Login",
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        // Replace with DB lookup
        const user = {
          id: "1",
          email: credentials?.email,
          password: await bcrypt.hash("password123", 10),
          role: "client"
        };

        const valid = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!valid) return null;
        return user;
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    }
  }
});

