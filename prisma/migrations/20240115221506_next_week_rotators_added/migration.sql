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
    "nextFeaturedNightfall" TEXT NOT NULL DEFAULT '',
    "nextFeaturedGuardian" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Twat" ("date", "featuredGuardian", "featuredNightfall", "featuredRaid", "id", "intro", "title") SELECT "date", "featuredGuardian", "featuredNightfall", "featuredRaid", "id", "intro", "title" FROM "Twat";
DROP TABLE "Twat";
ALTER TABLE "new_Twat" RENAME TO "Twat";
CREATE UNIQUE INDEX "Twat_date_key" ON "Twat"("date");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
