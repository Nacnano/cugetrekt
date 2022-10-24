import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //   const post1 = await prisma.user.upsert({
  //     where: { studentId: '00001' },
  //     update: {},
  //     create: {
  //       studentId: '00001',
  //       title: 'Mister',
  //       firstName: 'Miyuki',
  //       sirName: 'Shirogane',
  //     },
  //   });
  //   console.log({ post1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
