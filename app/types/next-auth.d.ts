import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      image?: string | null;
    } & DefaultSession["user"];
  }
}
