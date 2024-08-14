import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { ZodError } from "zod";
import { signInSchema } from "./lib/zod";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          // logic to salt and hash password
          const saltRounds = 10;
          const pwHash = await bcrypt.hash(password, saltRounds);

          // logic to verify if the user exists
          user = await getUserFromDb(email, pwHash);

          if (!user) {
            // No user found, so this is their first attempt to login
            // meaning this is also the place you could do registration
            throw new Error("User not found.");
          }

          // return user object with their profile data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],
});
