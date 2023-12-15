-- CreateTable
CREATE TABLE "Twat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "featuredRaid" TEXT NOT NULL,
    "featuredNightfall" TEXT NOT NULL
);
