import prisma from "@/app/db";
import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { rssFeed } = body;

    if (!rssFeed) {
      return NextResponse.json(
        { msg: "Missing RSS Feed data" },
        { status: 400 }
      );
    }

    const session = await getServerSession(NEXT_AUTH);
    if (!session || !session.user || !session.user.email) {
      return NextResponse.json(
        { msg: "Unauthenticated user" },
        { status: 401 }
      );
    }

    const email = session.user.email;

    // Update RSS feed for the authenticated user
    const updateRssFeed = await prisma.user.update({
      where: { email: email },
      data: {
        RSSFeed: rssFeed,
      },
    });

    console.log("Updated RSS Feed for user:", updateRssFeed);

    return NextResponse.json({ msg: "RSS Feed Updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating RSS Feed:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
