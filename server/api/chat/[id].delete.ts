import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {
        return await prisma.chats.delete({
            where: {
                id: event.context.params.id
            },
        })
    } catch (e) {
        console.error(e)
    }
})