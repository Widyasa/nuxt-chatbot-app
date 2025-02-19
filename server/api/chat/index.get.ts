import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {
        const data =  await prisma.chats.findMany()
        return data
    } catch (e) {
        console.error(e)
    }
})