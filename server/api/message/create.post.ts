import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const data = await prisma.messages.create({
            data: {
                ...body
            }
        })
        return data
    } catch (e) {
        console.error(e)
        return e
    }
})