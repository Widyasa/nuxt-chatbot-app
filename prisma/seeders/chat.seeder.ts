import {PrismaClient} from "@prisma/client";

export const chatSeeder = async () => {
    const prismaClient = new PrismaClient();
    await prismaClient.chats.create({
        data : {
            name: 'tes chat'
        }
    })
}