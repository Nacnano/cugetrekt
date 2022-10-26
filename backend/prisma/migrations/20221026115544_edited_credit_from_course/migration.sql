/*
  Warnings:

  - Changed the type of `credit` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "credit",
ADD COLUMN     "credit" DOUBLE PRECISION NOT NULL;
