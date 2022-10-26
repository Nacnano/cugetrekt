/*
  Warnings:

  - You are about to drop the `withdrawal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "withdrawal";

-- CreateTable
CREATE TABLE "Withdrawal" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "docsName" TEXT NOT NULL,
    "lastEdit" TEXT NOT NULL,
    "title" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gpax" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "credit" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,
    "year" TEXT NOT NULL,
    "studySystem" INTEGER NOT NULL,
    "course1" TEXT NOT NULL,
    "course2" TEXT,
    "course3" TEXT,
    "reason1" TEXT NOT NULL,
    "reason2" TEXT,
    "reason3" TEXT,

    CONSTRAINT "Withdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Withdrawal_userId_key" ON "Withdrawal"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Withdrawal_studentId_key" ON "Withdrawal"("studentId");

-- AddForeignKey
ALTER TABLE "Resignation" ADD CONSTRAINT "Resignation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Withdrawal" ADD CONSTRAINT "Withdrawal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
