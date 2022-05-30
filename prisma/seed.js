const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mission: "Node"
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: "Woopa1" },
            update: {},
            create: {
                name: "Woopa1",
                username: "ajolonauta1",
                mission: "Node"
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: "Woopa 2" },
            update: {},
            create: {
                name: "Woopa 2",
                username: "ajolonauta2",
                mission: "Java"
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: "Woopa 3" },
            update: {},
            create: {
                name: "Woopa 3",
                username: "ajolonauta3",
                mission: "Node"
            },
        });

        const woopa4 = await prisma.explorer.upsert({
            where: { name: "Woopa 4" },
            update: {},
            create: {
                name: "Woopa 4",
                username: "ajolonauta4",
                mission: "Java"
            },
        });

        const woopa5 = await prisma.explorer.upsert({
            where: { name: "Woopa 5" },
            update: {},
            create: {
                name: "Woopa 5",
                username: "ajolonauta5",
                mission: "Node"
            },
        });

        const mission1 = await prisma.mission.upsert({
            where: { name: "Mission Node" },
            update: {},
            create: {
                name: "Mission Node",
                lang: "JavaScript",
                missionComander: "Carlo Gilmar",
                enrollments:524
            },
        });

        const mission2 = await prisma.mission.upsert({
            where: { name: "Mission Java" },
            update: {},
            create: {
                name: "Mission Java",
                lang: "Java",
                missionComander: "Fernanda Ochoa",
                enrollments:500
            },
        });
        console.log("Create 6 explorers and 2 missions");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();