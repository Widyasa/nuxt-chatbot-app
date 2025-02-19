import {chatSeeder} from "~/prisma/seeders/chat.seeder";
import {PrismaClient} from "@prisma/client";
const prismaClient = new PrismaClient()
async function seed() {
    await chatSeeder()
}
seed()
    .catch((err) => {
        throw err
    })
    .finally(async () => {
        await prismaClient.$disconnect()
    })