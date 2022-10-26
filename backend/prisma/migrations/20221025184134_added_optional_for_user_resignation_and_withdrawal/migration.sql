-- DropForeignKey
ALTER TABLE "Resignation" DROP CONSTRAINT "Resignation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Withdrawal" DROP CONSTRAINT "Withdrawal_userId_fkey";

-- AlterTable
ALTER TABLE "Resignation" ALTER COLUMN "docsName" DROP NOT NULL,
ALTER COLUMN "lastEdit" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "surname" DROP NOT NULL,
ALTER COLUMN "studentId" DROP NOT NULL,
ALTER COLUMN "faculty" DROP NOT NULL,
ALTER COLUMN "department" DROP NOT NULL,
ALTER COLUMN "tel" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "semester" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "studySystem" DROP NOT NULL,
ALTER COLUMN "reason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "surname" DROP NOT NULL,
ALTER COLUMN "studentId" DROP NOT NULL,
ALTER COLUMN "faculty" DROP NOT NULL,
ALTER COLUMN "department" DROP NOT NULL,
ALTER COLUMN "studySystem" DROP NOT NULL,
ALTER COLUMN "tel" DROP NOT NULL,
ALTER COLUMN "infoEmail" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Withdrawal" ALTER COLUMN "docsName" DROP NOT NULL,
ALTER COLUMN "lastEdit" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "surname" DROP NOT NULL,
ALTER COLUMN "studentId" DROP NOT NULL,
ALTER COLUMN "faculty" DROP NOT NULL,
ALTER COLUMN "department" DROP NOT NULL,
ALTER COLUMN "tel" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "gpax" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "semester" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "studySystem" DROP NOT NULL,
ALTER COLUMN "course1" DROP NOT NULL,
ALTER COLUMN "reason1" DROP NOT NULL,
ALTER COLUMN "credit" DROP NOT NULL;
