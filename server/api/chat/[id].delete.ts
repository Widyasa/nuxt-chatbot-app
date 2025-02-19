import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {
        await prisma.messages.deleteMany({
            where: {
                chat_id: event.context.params.id
            }
        })
        return await prisma.chats.delete({
            where: {
                id: event.context.params.id
            },
        })
    } catch (e) {
        console.error(e)
    }
})