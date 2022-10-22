import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.user.upsert({
    where: { studentId: '00001' },
    update: {},
    create: {
      studentId: '00001',
      firstName: 'Miyuki',
      sirName: 'Shirogane',
      meeFan: true,
    },
  });

  const post2 = await prisma.user.upsert({
    where: { studentId: '00002' },
    update: {},
    create: {
      studentId: '00002',
      firstName: 'Shinomiya',
      sirName: 'Kaguya',
      meeFan: true,
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
