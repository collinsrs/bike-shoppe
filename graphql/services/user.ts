import prisma from "lib/prisma";

export default async function getToken(token: string | any, user: any, perms: string[] | any) {
    const data = await prisma.adminTokens.findUnique({
        where: {
            id: token
        }
    })

    // check if user id matches one in token
    if (data.userId !== user) {
        return 'e1'
    } else if (data.perms !== perms) {
        return 'e2'
    } else if (data.userId === user && data.perms === perms) {
        return true
    } else if (!user) {
        return 'e3'
    } else if (!perms) {
        return 'e4'
    } else if (!token) {
        return 'e5'
    } else {
        return 'e9'
    }
}