import {  NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/app/lib/auth";

const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI!;

export async function GET() {
  try {
    // Check if user is authenticated
    const session = await getServerSession(NEXT_AUTH);
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Define Spotify OAuth scopes
    const scopes = [
      "user-read-private",
      "user-read-email",
      "playlist-read-private",
      "playlist-read-collaborative",
      "user-library-read",
      "user-top-read",
      "user-read-recently-played",
    ];

    // Build authorization URL
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: "code",
      redirect_uri: REDIRECT_URI,
      scope: scopes.join(" "),
      show_dialog: "true", // Allow users to switch accounts
    });

    const authUrl = `${SPOTIFY_AUTH_URL}?${params.toString()}`;

    return NextResponse.json({ url: authUrl });
  } catch (error) {
    console.error("Error in Spotify auth route:", error);
    return NextResponse.json(
      { error: "Failed to initialize Spotify authorization" },
      { status: 500 }
    );
  }
}
