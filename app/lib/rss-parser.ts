// app/lib/rss-parser.ts
import Parser from "rss-parser";

type CustomFeedItem = {
  title: string;
  link: string;
  pubDate: string;
  guid: string;
  isoDate: string;
  creator?: string;
  content?: string;
  contentSnippet?: string;
  categories?: string[];
  duration?: string;
  episodeType?: string;
  explicit?: boolean;
  imageUrl?: string;
};

type CustomFeed = {
  title: string;
  description: string;
  link: string;
  feedUrl: string;
  items: CustomFeedItem[];
  language?: string;
  lastBuildDate?: string;
  image?: {
    url: string;
    title: string;
    link: string;
  };
  copyright?: string;
  generator?: string;
};

// Configure parser with custom fields
const parser: Parser<CustomFeed, CustomFeedItem> = new Parser({
  customFields: {
    item: [
      ["itunes:duration", "duration"],
      ["itunes:episodeType", "episodeType"],
      ["itunes:explicit", "explicit"],
      ["itunes:image", "imageUrl"],
      "creator",
      "guid",
    ],
  },
});

// Helper function to normalize duration to seconds
function normalizeDuration(duration?: string): string | undefined {
  if (!duration) return undefined;

  if (/^\d+$/.test(duration)) return duration;

  const timeMatch = duration.match(/(\d+):(\d+):(\d+)/);
  if (timeMatch) {
    const [, hours, minutes, seconds] = timeMatch;
    return String(
      Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds)
    );
  }

  const shortTimeMatch = duration.match(/(\d+):(\d+)/);
  if (shortTimeMatch) {
    const [, minutes, seconds] = shortTimeMatch;
    return String(Number(minutes) * 60 + Number(seconds));
  }

  return duration;
}

export async function parseRSSFeed(
  feedUrl: string
): Promise<
  { feed: CustomFeed; error?: never } | { feed?: never; error: string }
> {
  try {
    // Validate URL
    try {
      new URL(feedUrl);
    } catch (error) {
      console.log(error);
      return { error: "Invalid RSS feed URL" };
    }

    // Parse the feed
    const feed = await parser.parseURL(feedUrl);

    // Process and clean up feed items
    const processedItems = feed.items.map((item) => {
      if (!item.title || !item.link || !item.guid || !item.isoDate) {
        throw new Error("Required fields missing in feed item");
      }

      const pubDate = item.pubDate
        ? new Date(item.pubDate).toISOString()
        : item.isoDate;

      return {
        title: item.title,
        link: item.link,
        guid: item.guid,
        pubDate,
        isoDate: item.isoDate,
        creator: item.creator,
        content: item.content?.trim(),
        contentSnippet:
          item.contentSnippet?.trim().slice(0, 280) ||
          item.content?.trim().slice(0, 280),
        categories: item.categories || [],
        explicit: item.explicit === true,
        duration: normalizeDuration(item.duration),
        episodeType: item.episodeType,
        imageUrl: item.imageUrl,
      };
    });

    return {
      feed: {
        title: feed.title || "Untitled Feed",
        description: feed.description || "",
        link: feed.link || feedUrl,
        feedUrl: feed.feedUrl,
        items: processedItems,
        language: feed.language,
        lastBuildDate: feed.lastBuildDate,
        image: feed.image,
        copyright: feed.copyright,
        generator: feed.generator,
      },
    };
  } catch (error) {
    console.error("Error parsing RSS feed:", error);
    return {
      error:
        error instanceof Error ? error.message : "Failed to parse RSS feed",
    };
  }
}
