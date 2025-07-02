import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma"; 

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    return NextResponse.json({ error: "Search term is required." }, { status: 400 });
  }

  try {
    // Step 1: Check if results already stored
    const cached = await prisma.podcast.findMany({
      where: {
        title: {
          contains: term,
          mode: "insensitive",
        },
      },
    });

    if (cached.length > 0) {
      return NextResponse.json({ source: "db", results: cached });
    }

    // Step 2 Fetch from iTunes API
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=podcast`);
    const data = await res.json();

    // Step 3 Save results to DB
    const podcastsToSave = data.results.map((item) => ({
      feedUrl: item.feedUrl,
      title: item.collectionName,
      author: item.artistName,
      image: item.artworkUrl600,
    }));

    // Ignore duplicates based on feedUrl
    for (const podcast of podcastsToSave) {
      try {
        await prisma.podcast.create({ data: podcast });
      } catch (e) {
        // ignore duplicate entry errors
      }
    }

    return NextResponse.json({ source: "itunes", results: podcastsToSave });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}







