"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const post1 = await prisma.user.upsert({
        where: { studentId: '00001' },
        update: {},
        create: {
            studentId: '00001',
            firstName: 'Miyuki',
            sirName: 'Shirogane',
        },
    });
    const post2 = await prisma.user.upsert({
        where: { studentId: '00002' },
        update: {},
        create: {
            studentId: '00002',
            firstName: 'Shinomiya',
            sirName: 'Kaguya',
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
//# sourceMappingURL=seed.js.map