import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/app/lib/auth";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI!;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code is required" },
      { status: 400 }
    );
  }

  try {
    // Exchange the authorization code for access token
    const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
      "base64"
    );
    const tokenResponse = await fetch(SPOTIFY_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basicAuth}`,
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      console.error("Spotify token error:", errorData);
      return NextResponse.json(
        { error: "Failed to fetch access token" },
        { status: 500 }
      );
    }

    const tokens = await tokenResponse.json();
    const expiresIn = tokens.expires_in;
    const tokenExpirationTime = new Date(Date.now() + expiresIn * 1000);

    // Get the current session
    const session = await getServerSession(NEXT_AUTH);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Update user with Spotify tokens
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
        tokenExpiry: tokenExpirationTime,
      },
    });

    // Redirect to a success page or dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  } catch (error) {
    console.error("Error in Spotify callback:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
