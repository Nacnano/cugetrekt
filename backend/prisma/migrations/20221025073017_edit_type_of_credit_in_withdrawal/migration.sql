/*
  Warnings:

  - Changed the type of `credit` on the `Withdrawal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Withdrawal" DROP COLUMN "credit",
ADD COLUMN     "credit" DOUBLE PRECISION NOT NULL;
