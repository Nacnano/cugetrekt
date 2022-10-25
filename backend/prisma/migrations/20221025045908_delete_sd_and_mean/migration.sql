/*
  Warnings:

  - You are about to drop the column `mean` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `sd` on the `Course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "mean",
DROP COLUMN "sd";
