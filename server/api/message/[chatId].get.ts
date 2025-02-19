import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {
        const data =  await prisma.messages.findMany({
            where: {
                chat_id: event.context.params.chatId,
            }
        })
        return data
    } catch (e) {
        console.error(e)
    }
})