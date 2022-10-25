import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const user1 = await prisma.user.upsert({
  //   where: {},
  //   update: {},
  //   create: {
  //     email: '6532027021@student.chula.ac.th',
  //     password: 'nothinghere',
  //     title: 1,
  //     name: 'เขมนันท์',
  //     surname: 'มณีศรี',
  //     studentId: '6532027021',
  //     faculty: 'วิศวกรรมศาสตร์',
  //     department: 'วิศวกรรมคอมพิวเตอร์',
  //     studySystem: 1,
  //     tel: '0864129282',
  //     infoEmail: 'jomlovejen7956@gmail.com',
  //   },
  // });

  // const withdrawal1 = await prisma.withdrawal.upsert({
  //   where: { studentId: '00001' },
  //   update: {},
  //   create: {
  //     userId: 1,
  //     docsName: 'temp',
  //     lastEdit: 'today',
  //     title: 1,
  //     name: 'เขมนันท์',
  //     surname: 'มณีศรี',
  //     studentId: '6532027021',
  //     faculty: 'วิศวกรรมศาสตร์',
  //     department: 'วิศวกรรมคอมพิวเตอร์',
  //     tel: '0864129282',
  //     email: 'jomlovejen7956@gmail.com',
  //     gpax: '4.00',
  //     status: 1,
  //     credit: 16.0,
  //     semester: 1,
  //     year: '2565',
  //     studySystem: 1,
  //     course1: 'calculus 1',
  //     course2: 'genphy 1',
  //     course3: 'expl eng world',
  //     reason1: 'คะแนนน้อย',
  //     reason2: 'คะแนนน้อยเหมือนกัน',
  //     reason3: 'งานเยอะ',
  //   },
  // });

  // const resignation1 = await prisma.resignation.upsert({
  //   where: { studentId: '00001' },
  //   update: {},
  //   create: {
  //     userId: 1,
  //     docsName: 'temp',
  //     lastEdit: 'today',
  //     title: 1,
  //     name: 'เขมนันท์',
  //     surname: 'มณีศรี',
  //     studentId: '6532027021',
  //     faculty: 'วิศวกรรมศาสตร์',
  //     department: 'วิศวกรรมคอมพิวเตอร์',
  //     tel: '0864129282',
  //     email: 'jomlovejen7956@gmail.com',
  //     semester: 1,
  //     year: '2565',
  //     studySystem: 1,
  //     reason: 'คะแนนน้อย งานเยอะ',
  //   },
  // });

  const doc1 = await prisma.documentType.upsert({
    where: { id: 1},
    update: {},
    create: {
      docName: 'Withdrawal',
    },
  });

  const doc2 = await prisma.documentType.upsert({
    where: { id: 2},
    update: {},
    create: {
      docName: 'Resignation',
    },
  });

  // console.log({ user1 });
  // console.log( { withdrawal1 } );
  // console.log( { resignation1 } );
  console.log( {doc1, doc2} )
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
