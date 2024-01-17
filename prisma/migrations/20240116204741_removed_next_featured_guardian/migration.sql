/*
  Warnings:

  - You are about to drop the column `nextFeaturedGuardian` on the `Twat` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Twat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "featuredRaid" TEXT NOT NULL,
    "featuredDungeon" TEXT NOT NULL DEFAULT '',
    "featuredNightfall" TEXT NOT NULL,
    "featuredGuardian" TEXT NOT NULL,
    "nextFeaturedRaid" TEXT NOT NULL DEFAULT '',
    "nextFeaturedDungeon" TEXT NOT NULL DEFAULT '',
    "nextFeaturedNightfall" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Twat" ("date", "featuredDungeon", "featuredGuardian", "featuredNightfall", "featuredRaid", "id", "intro", "nextFeaturedDungeon", "nextFeaturedNightfall", "nextFeaturedRaid", "title") SELECT "date", "featuredDungeon", "featuredGuardian", "featuredNightfall", "featuredRaid", "id", "intro", "nextFeaturedDungeon", "nextFeaturedNightfall", "nextFeaturedRaid", "title" FROM "Twat";
DROP TABLE "Twat";
ALTER TABLE "new_Twat" RENAME TO "Twat";
CREATE UNIQUE INDEX "Twat_date_key" ON "Twat"("date");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
