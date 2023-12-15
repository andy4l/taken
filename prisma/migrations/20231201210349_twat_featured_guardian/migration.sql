/*
  Warnings:

  - Added the required column `featuredGuardian` to the `Twat` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Twat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "featuredRaid" TEXT NOT NULL,
    "featuredNightfall" TEXT NOT NULL,
    "featuredGuardian" TEXT NOT NULL
);
INSERT INTO "new_Twat" ("date", "featuredNightfall", "featuredRaid", "id", "intro", "title") SELECT "date", "featuredNightfall", "featuredRaid", "id", "intro", "title" FROM "Twat";
DROP TABLE "Twat";
ALTER TABLE "new_Twat" RENAME TO "Twat";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
