/*
  Warnings:

  - A unique constraint covering the columns `[RSSFeed]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `RSSFeed` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "RSSFeed" TEXT NOT NULL,
ADD COLUMN     "accessToken" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "refreshToken" TEXT,
ADD COLUMN     "spotifyId" TEXT,
ADD COLUMN     "tokenExpiry" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "User_RSSFeed_key" ON "User"("RSSFeed");
