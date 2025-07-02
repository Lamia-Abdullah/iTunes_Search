-- CreateTable
CREATE TABLE "Podcast" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "feedUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Podcast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episode" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "pubDate" TIMESTAMP(3) NOT NULL,
    "podcastId" TEXT NOT NULL,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Podcast_feedUrl_key" ON "Podcast"("feedUrl");

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "Podcast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
