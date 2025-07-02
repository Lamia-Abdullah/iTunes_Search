import { NextResponse } from "next/server";
import xml2js from "xml2js";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// This is a GET API endpoint to fetch episodes from either the RSS feed or the database

export async function GET(request) {
  // Extract `feedUrl` parameter from request URL
  const { searchParams } = new URL(request.url);
  const feedUrl = searchParams.get("feedUrl");

  // If no feedUrl is provided, return 400 error
  if (!feedUrl) {
    return NextResponse.json({ error: "Missing feedUrl" }, { status: 400 });
  }

  try {
    // Try to find the podcast in the DB, include episodes if any
    const podcast = await prisma.podcast.findUnique({
      where: { feedUrl },
      include: { episodes: true },
    });

    if (podcast && podcast.episodes.length > 0) {
      return NextResponse.json({ episodes: podcast.episodes });
    }

// Fetching the RSS feed from the internet 
// (we use a User-Agent header because some websites reject requests without a browser-like agent)
    const res = await fetch(feedUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; PodcastBot/1.0; +https://yourdomain.com)",
      },
    });

    // Ensure the fetched content is XML, 
    const contentType = res.headers.get("content-type") || "";
    if (!res.ok || !contentType.includes("xml")) {
      throw new Error("Feed response is not XML");
    }

    // Parse XML content into a JS object using xml2js
    const xml = await res.text();
    const parsed = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const items = parsed?.rss?.channel?.[0]?.item || [];

    if (!podcast) {
      return NextResponse.json(
        { error: "Podcast not found in DB" },
        { status: 404 }
      );
    }

    const newEpisodes = [];

    for (const item of items) {
      const title = item.title?.[0] || "No title";
      const audioUrlRaw = item.enclosure?.[0]?.url || "";
      const audioUrl = Array.isArray(audioUrlRaw)
        ? audioUrlRaw[0]
        : audioUrlRaw;

      const pubDateRaw = item.pubDate?.[0] || "";
      const description = item.description?.[0] || "";

       // Skip if no audio URL exists
      if (!audioUrl) continue; 

      const parsedDate = new Date(pubDateRaw);
      const pubDate = isNaN(parsedDate) ? new Date() : parsedDate;

      // Ensure the episode isn't already saved (unique by audioUrl)
      const exists = await prisma.episode.findUnique({
        where: { audioUrl },
      });

      if (exists) {
        newEpisodes.push(exists);
        continue;
      }

      // Save the new episode and connect it to the podcast
      const episode = await prisma.episode.create({
        data: {
          title,
          audioUrl,
          pubDate,
          description,
          podcast: {
            connect: { id: podcast.id },
          },
        },
      });

      newEpisodes.push(episode);
    }

    return NextResponse.json({ episodes: newEpisodes });
  } catch (err) {
    // On error, log the issue and return a 500 response with error message
    console.error(" Error saving episodes:", err.message);
    return NextResponse.json(
      { error: err.message || "Failed to fetch or parse RSS" },
      { status: 500 }
    );
  }
}
