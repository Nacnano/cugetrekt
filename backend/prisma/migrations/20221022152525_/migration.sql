/*
  Warnings:

  - You are about to drop the column `meeFan` on the `User` table. All the data in the column will be lost.
  - Added the required column `title` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "meeFan",
ADD COLUMN     "title" TEXT NOT NULL;
