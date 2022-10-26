-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "title" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "studySystem" INTEGER NOT NULL,
    "tel" TEXT NOT NULL,
    "infoEmail" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resignation" (
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
    "semester" INTEGER NOT NULL,
    "year" TEXT NOT NULL,
    "studySystem" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "Resignation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "withdrawal" (
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

    CONSTRAINT "withdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "courseId" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "courseAbbr" TEXT NOT NULL,
    "mean" DOUBLE PRECISION NOT NULL,
    "sd" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_studentId_key" ON "User"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Resignation_userId_key" ON "Resignation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Resignation_studentId_key" ON "Resignation"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "withdrawal_userId_key" ON "withdrawal"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "withdrawal_studentId_key" ON "withdrawal"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseId_key" ON "Course"("courseId");
