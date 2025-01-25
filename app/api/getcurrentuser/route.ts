import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/app/lib/auth";
import axios from "axios";
import prisma from "@/app/db";

const SPOTIFY_GETCURRENTUSER =
  "https://creators.spotify.com/pod/api/currentuser";
// const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
// const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
// const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;

export async function GET() {
  try {
    // Validate session
    const session = await getServerSession(NEXT_AUTH);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Fetch user details from database
    const getUserDetails = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        accessToken: true,
        refreshToken: true,
        tokenExpiry: true,
      },
    });

    if (!getUserDetails) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Detailed logging for debugging
    console.log("Access Token:", getUserDetails.accessToken);
    console.log("Refresh Token:", getUserDetails.refreshToken);

    // Fetch current user from Spotify with detailed configuration
    try {
      const spotifyResponse = await axios.get(SPOTIFY_GETCURRENTUSER, {
        headers: {
          Authorization: `Bearer ${getUserDetails.accessToken}`,
          Accept: "application/json",
          // Add any additional headers that might be required
          "User-Agent": "NextJS Spotify Creator App",
          Origin: "https://creators.spotify.com",
        },
        // Add timeout and other axios configurations
        timeout: 10000,
        validateStatus: function (status) {
          // Treat 401 and other non-200 statuses as successful for more detailed error logging
          return status >= 200 && status < 600;
        },
      });

      // Log full response for debugging
      console.log("Spotify API Full Response:", {
        status: spotifyResponse.status,
        statusText: spotifyResponse.statusText,
        headers: spotifyResponse.headers,
        data: spotifyResponse.data,
      });

      // If status is not 200, log error details
      if (spotifyResponse.status !== 200) {
        return NextResponse.json(
          {
            error: "Failed to fetch Spotify user data",
            status: spotifyResponse.status,
            statusText: spotifyResponse.statusText,
            headers: spotifyResponse.headers,
          },
          { status: spotifyResponse.status }
        );
      }

      return NextResponse.json(spotifyResponse.data);
    } catch (spotifyFetchError) {
      console.error("Detailed Spotify Fetch Error:", spotifyFetchError);

      // If it's an Axios error, log more details
      if (axios.isAxiosError(spotifyFetchError)) {
        return NextResponse.json(
          {
            error: "Axios Error Fetching Spotify User",
            details: {
              message: spotifyFetchError.message,
              response: spotifyFetchError.response?.data,
              status: spotifyFetchError.response?.status,
              headers: spotifyFetchError.response?.headers,
            },
          },
          { status: spotifyFetchError.response?.status || 500 }
        );
      }

      return NextResponse.json(
        { error: "Unexpected error fetching Spotify user data" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Unexpected Error in Spotify auth route:", error);
    return NextResponse.json(
      { error: "Failed to initialize Spotify authorization" },
      { status: 500 }
    );
  }
}
