import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./auth"; // Adjust the path as needed

export async function getSession() {
  try {
    return await getServerSession(NEXT_AUTH);
  } catch (error) {
    console.error("Failed to fetch session:", error);
    return null;
  }
}

export async function getCurrentUser() {
  try {
    const session = await getSession();
    return session?.user || null;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    return null;
  }
}
