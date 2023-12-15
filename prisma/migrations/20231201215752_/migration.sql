/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `Twat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Twat_date_key" ON "Twat"("date");
