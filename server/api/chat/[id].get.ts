import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {
        const data =  await prisma.chats.findUnique({
            where: {
                id: event.context.params.id
            },
            include : {
                messages: true
            }
        })
        return data
    } catch (e) {
        console.error(e)
    }
})