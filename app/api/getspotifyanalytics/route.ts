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
//     const [_, hours, minutes, seconds] = timeMatch;
//     return String(
//       Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds)
//     );
//   }

//   // Handle MM:SS format
//   const shortTimeMatch = duration.match(/(\d+):(\d+)/);
//   if (shortTimeMatch) {
//     const [_, minutes, seconds] = shortTimeMatch;
//     return String(Number(minutes) * 60 + Number(seconds));
//   }

//   return duration;
// }
// // const SPOTIFY_ANA

// export async function GET(req:NextRequest){

//     // const body = await req.json();

//     const session = await getServerSession(NEXT_AUTH);

//     if (!session || !session.user || !session.user.email)
//     {
//         return NextResponse.json(
//             { msg: "Unauthenticated User" },
//             {status:401}
//         )
//     }

//     const email = session.user.email;

//     const user = await prisma.user.findUnique({
//         where: { email: email }
//     });

//     if (!user) {
//         return NextResponse.json(
//             { msg: "User not found" },
//             {status:404}
//         );
//     }

//     try {
//         const result = await parseRSSFeed(user.RSSFeed);

//         return NextResponse.json(
//             { result: result },
//             {status:200}
//         );
//     } catch (error) {
//         return NextResponse.json(
//             { error: error },
//             {status:500}
//         )
//     }
    
// }


// // Custom type definitions for RSS feed items

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

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/app/lib/auth";
import prisma from "@/app/db";

const SPOTIFY_API_BASE = "https://api.spotify.com/v1";

// Request body type
type RequestBody = {
  timeRange?: string;
};

// Types for the response
type PodcastAnalytics = {
  showId: string;
  name: string;
  publisher: string;
  description: string;
  totalEpisodes: number;
  metadata: {
    followers?: number;
    rating?: number;
    language: string;
    explicit: boolean;
    lastUpdated: string;
  };
  episodes: EpisodeAnalytics[];
  performance: {
    averageListeners: number;
    totalListens: number;
    completionRate: number;
    averageDuration: number;
    topEpisodes: EpisodeAnalytics[];
  };
};

type EpisodeAnalytics = {
  id: string;
  name: string;
  description: string;
  duration: number;
  releaseDate: string;
  listens: number;
  completionRate: number;
  uniqueListeners: number;
  peakListeners: number;
};

async function refreshAccessToken(refreshToken: string) {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
  const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;

  try {
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${CLIENT_ID}:${CLIENT_SECRET}`
          ).toString("base64")}`,
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
      }
    );

    const data = await tokenResponse.json();
    if (!tokenResponse.ok) {
      throw new Error("Failed to refresh token");
    }
    console.log("ACCESS TOKENS ARE REFRESHED");

    return data.access_token;

   
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
}


async function getValidAccessToken(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      accessToken: true,
      refreshToken: true,
      tokenExpiry: true,
      showName:true
    },
  });

  if (!user?.accessToken || !user.refreshToken) {
    throw new Error("No Spotify tokens found");
  }

  // Check if token is expired or will expire in the next 5 minutes
  if (
    !user.tokenExpiry ||
    user.tokenExpiry < new Date(Date.now() + 5 * 60 * 1000)
  ) {
    const newAccessToken = await refreshAccessToken(user.refreshToken);

    // Update token in database
    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        accessToken: newAccessToken,
        tokenExpiry: new Date(Date.now() + 3600 * 1000), // 1 hour from now
      },
    });

    return updatedUser;
  }
  console.log("VAlID ACCESS TOKENS ARE GOT");
  return user;
}

// async function fetchSpotifyData(path: string, accessToken: string) {

//   try {
//       const response = await fetch(`${SPOTIFY_API_BASE}${path}`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
    
//     console.log("RESPONSE IF FOUND FORM SPOTIFY: ", response);
//     return response.json();
    
//   } catch (error) {
//      throw new Error(`Spotify API error: ${error}`);
//   }


//   // if (!response.ok) {
//   //   throw new Error(`Spotify API error: ${response.statusText}`);
//   // }

  
// }

async function fetchSpotifyData(path: string, accessToken: string) {
  try {
    const response = await fetch(`${SPOTIFY_API_BASE}${path}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Log response status and headers for debugging
    console.log(`Spotify API ${path} status:`, response.status);
    console.log(
      `Response headers:`,
      Object.fromEntries(response.headers.entries())
    );

    // Check if response is ok before trying to parse JSON
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Spotify API error for ${path}:`, {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });
      throw new Error(
        `Spotify API error: ${response.status} ${response.statusText}`
      );
    }

    // Get the response text first
    const responseText = await response.text();

    // Log the raw response for debugging
    console.log(`Raw response for ${path}:`, responseText);

    // Only try to parse if we have content
    if (!responseText) {
      throw new Error("Empty response from Spotify API");
    }

    // Parse the JSON
    try {
      return JSON.parse(responseText);
    } catch (parseError) {
      console.error(`JSON parse error for ${path}:`, parseError);
      console.error("Failed to parse response:", responseText);
      throw new Error(
        `Failed to parse Spotify API response: ${parseError}`
      );
    }
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    throw error;
  }
}


async function getShowIdByName(showName: string, accessToken: string) {
  const encodedShowName = encodeURIComponent(showName);
  const searchResponse = await fetchSpotifyData(
    `/search?q=${encodedShowName}&type=show&limit=1`,
    accessToken
  );

  if (!searchResponse.shows?.items?.length) {
    throw new Error(`Show not found: ${showName}`);
  }

  return searchResponse.shows.items[0].id;
}

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const body: RequestBody = await req.json();
    // const { timeRange = "30days" } = body;

    

    // Get user session
    const session = await getServerSession(NEXT_AUTH);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Get valid access token
    const userInfo = await getValidAccessToken(session.user.email);
    const accessToken = userInfo.accessToken;
    const showName = userInfo.showName;

    if (!accessToken || !showName)
    {
      return NextResponse.json({msg:"ShowName or Access token not provided",data:accessToken,showName},{status:400})
    }
    // Get show ID from show name
    const showId = await getShowIdByName(showName, accessToken);

    // Fetch show details, episodes, and analytics in parallel
    const [showDetails, episodes] = await Promise.all([
      fetchSpotifyData(`/shows/${showId}`, accessToken),
      fetchSpotifyData(`/shows/${showId}/episodes?limit=50`, accessToken),
      // fetchSpotifyData(
      //   `/shows/${showId}/analytics?time_range=${timeRange}`,
      //   accessToken
      // ),
    ]);

    // Process episodes with analytics
    const processedEpisodes = episodes.items.map((episode:any) => {
      // const episodeAnalytics =
      //   analytics.episodes?.find((a: any) => a.id === episode.id) || {};

      return {
        id: episode.id,
        name: episode.name,
        description: episode.description,
        duration: episode.duration_ms,
        releaseDate: episode.release_date,
        // listens: episodeAnalytics.total_listens || 0,
        // completionRate: episodeAnalytics.completion_rate || 0,
        // uniqueListeners: episodeAnalytics.unique_listeners || 0,
        // peakListeners: episodeAnalytics.peak_listeners || 0,
      };
    });

    // Calculate aggregate metrics
    const totalListens = processedEpisodes.reduce(
      (sum: number, ep: { listens: number }) => sum + ep.listens,
      0
    );
    const averageCompletion =
      processedEpisodes.reduce(
        (sum: number, ep: { completionRate: number }) =>
          sum + ep.completionRate,
        0
      ) / processedEpisodes.length;
    const averageDuration =
      processedEpisodes.reduce(
        (sum: number, ep: { duration: number }) => sum + ep.duration,
        0
      ) / processedEpisodes.length;

    // Sort episodes by listens to get top performing episodes
    const topEpisodes = [...processedEpisodes]
      .sort((a, b) => b.listens - a.listens)
      .slice(0, 5);

    const podcastAnalytics: PodcastAnalytics = {
      showId,
      name: showDetails.name,
      publisher: showDetails.publisher,
      description: showDetails.description,
      totalEpisodes: showDetails.total_episodes,
      metadata: {
        followers: showDetails.followers?.total,
        language: showDetails.language,
        explicit: showDetails.explicit,
        lastUpdated: new Date().toISOString(),
      },
      episodes: processedEpisodes,
      performance: {
        averageListeners: Math.round(totalListens / processedEpisodes.length),
        totalListens,
        completionRate: averageCompletion,
        averageDuration,
        topEpisodes,
      },
    };

    console.log("RESPONSE FROM SPOTIFY: ", podcastAnalytics);
    return NextResponse.json(podcastAnalytics);
  } catch (error) {
    console.error("Error fetching podcast analytics:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}


