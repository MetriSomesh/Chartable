// import prisma from "@/app/db";
// import { NEXT_AUTH } from "@/app/lib/auth";
// import { getServerSession } from "next-auth";
// import { NextRequest, NextResponse } from "next/server";
// import Parser from "rss-parser";

// type CustomFeedItem = {
//   title: string;
//   link: string;
//   pubDate: string;
//   guid: string;
//   isoDate: string;
//   // Optional fields
//   creator?: string;
//   content?: string;
//   contentSnippet?: string;
//   categories?: string[];
//   duration?: string;
//   episodeType?: string;
//   explicit?: boolean;
//   imageUrl?: string;
// };

// type CustomFeed = {
//   title: string;
//   description: string;
//   link: string;
//   feedUrl: string;
//   items: CustomFeedItem[];
//   // Optional fields
//   language?: string;
//   lastBuildDate?: string;
//   image?: {
//     url: string;
//     title: string;
//     link: string;
//   };
//   copyright?: string;
//   generator?: string;
// };

// // Configure parser with custom fields
// const parser: Parser<CustomFeed, CustomFeedItem> = new Parser({
//   customFields: {
//     item: [
//       ["itunes:duration", "duration"],
//       ["itunes:episodeType", "episodeType"],
//       ["itunes:explicit", "explicit"],
//       ["itunes:image", "imageUrl"],
//       "creator",
//       "guid",
//     ],
//   },
// });

// export async function parseRSSFeed(feedUrl: string): Promise<
//   | {
//       feed: CustomFeed;
//       error?: never;
//     }
//   | {
//       feed?: never;
//       error: string;
//     }
// > {
//   try {
//     // Validate URL
//     new URL(feedUrl);

//     // Parse the feed
//     const feed = await parser.parseURL(feedUrl);

//     // Process and clean up feed items
//     const processedItems = feed.items.map((item) => {
//       // Ensure required fields are present
//       if (!item.title || !item.link || !item.guid || !item.isoDate) {
//         throw new Error("Required fields missing in feed item");
//       }

//       // Set pubDate with a fallback to isoDate if not present
//       const pubDate = item.pubDate
//         ? new Date(item.pubDate).toISOString()
//         : item.isoDate;

//       return {
//         // Required fields
//         title: item.title,
//         link: item.link,
//         guid: item.guid,
//         pubDate,
//         isoDate: item.isoDate,

//         // Optional fields
//         creator: item.creator,
//         content: item.content?.trim(),
//         contentSnippet:
//           item.contentSnippet?.trim().slice(0, 280) ||
//           item.content?.trim().slice(0, 280),
//         categories: item.categories || [],
//         explicit: item.explicit === true,
//         duration: normalizeDuration(item.duration),
//         episodeType: item.episodeType,
//         imageUrl: item.imageUrl,
//       };
//     });

//     // Return processed feed
//     return {
//       feed: {
//         title: feed.title || "Untitled Feed",
//         description: feed.description || "",
//         link: feed.link || feedUrl,
//         feedUrl: feed.feedUrl,
//         items: processedItems,
//         language: feed.language,
//         lastBuildDate: feed.lastBuildDate,
//         image: feed.image,
//         copyright: feed.copyright,
//         generator: feed.generator,
//       },
//     };
//   } catch (error) {
//     console.error("Error parsing RSS feed:", error);
//     return {
//       error:
//         error instanceof Error ? error.message : "Failed to parse RSS feed",
//     };
//   }
// }

// // Helper function to normalize duration to seconds
// function normalizeDuration(duration?: string): string | undefined {
//   if (!duration) return undefined;

//   // If duration is already in seconds, return as is
//   if (/^\d+$/.test(duration)) return duration;

//   // Handle HH:MM:SS format
//   const timeMatch = duration.match(/(\d+):(\d+):(\d+)/);
//   if (timeMatch) {
//     const [ hours, minutes, seconds] = timeMatch;
//     return String(
//       Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds)
//     );
//   }

//   // Handle MM:SS format
//   const shortTimeMatch = duration.match(/(\d+):(\d+)/);
//   if (shortTimeMatch) {
//     const [, minutes, seconds] = shortTimeMatch;
//     return String(Number(minutes) * 60 + Number(seconds));
//   }

//   return duration;
// }

// export  async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { rssFeed } = body;

//     if (!rssFeed) {
//       return NextResponse.json(
//         { msg: "Missing RSS Feed data" },
//         { status: 400 }
//       );
//     }

//     const parsedRSS = await parseRSSFeed(rssFeed);
//     console.log(parsedRSS.feed?.title);

//     const session = await getServerSession(NEXT_AUTH);
//     if (!session || !session.user || !session.user.email) {
//       return NextResponse.json(
//         { msg: "Unauthenticated user" },
//         { status: 401 }
//       );
//     }

//     const email = session.user.email;

//     // Update RSS feed for the authenticated user
//     const updateRssFeed = await prisma.user.update({
//       where: { email: email },
//       data: {
//         RSSFeed: rssFeed,
//         showName: parsedRSS.feed?.title
//       },
//     });

//     console.log("Updated RSS Feed for user:", updateRssFeed);

//     return NextResponse.json({ msg: "RSS Feed Updated" }, { status: 200 });
//   } catch (error) {
//     console.error("Error updating RSS Feed:", error);
//     return NextResponse.json({ error: error }, { status: 500 });
//   }
// }



// // Example usage
// /*
// const main = async () => {
//   const result = await parseRSSFeed('https://example.com/feed.xml');
//   if ('feed' in result) {
//     console.log('Feed Title:', result.feed.title);
//     console.log('Number of items:', result.feed.items.length);
//   } else {
//     console.error('Error:', result.error);
//   }
// };
// */

// app/api/rssfeed/route.ts
import prisma from "@/app/db";
import { NEXT_AUTH } from "@/app/lib/auth";
import { parseRSSFeed } from "@/app/lib/rss-parser";
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

    const parsedRSS = await parseRSSFeed(rssFeed);
    if (parsedRSS.error) {
      return NextResponse.json({ msg: parsedRSS.error }, { status: 400 });
    }

    const session = await getServerSession(NEXT_AUTH);
    if (!session?.user?.email) {
      return NextResponse.json(
        { msg: "Unauthenticated user" },
        { status: 401 }
      );
    }

    const email = session.user.email;

    // Update RSS feed for the authenticated user
    const updateRssFeed = await prisma.user.update({
      where: { email },
      data: {
        RSSFeed: rssFeed,
        showName: parsedRSS.feed?.title,
      },
    });
    console.log(updateRssFeed);
    return NextResponse.json({ msg: "RSS Feed Updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating RSS Feed:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}