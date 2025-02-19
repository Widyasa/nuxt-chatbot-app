import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        return await prisma.chats.update({
            where: {
                id: event.context.params.id
            },
            data: {
                ...body
            }
        })
    } catch (e) {
        console.error(e)
    }
})